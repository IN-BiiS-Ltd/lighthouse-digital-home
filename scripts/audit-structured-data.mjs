#!/usr/bin/env node
/**
 * Lighthouse Campus — structured data & social preview audit.
 *
 * Fetches every URL in /sitemap.xml from the running app and validates:
 *   • Open Graph: og:title, og:description, og:type, og:url, og:image
 *     (absolute https URL that actually resolves, correct content-type)
 *   • Twitter card: twitter:card = summary_large_image + title/description/image
 *   • canonical: present, absolute and self-referencing
 *   • JSON-LD: parses, has @context + @type
 *   • /careers: must carry a JobPosting with the fields Google requires
 *
 * Usage:  node scripts/audit-structured-data.mjs [origin]
 * Default origin: http://localhost:8080
 */
const ORIGIN = process.argv[2] || "http://localhost:8080";
const PUBLIC_ORIGIN = "https://lighthousecampus.com";

const failures = [];
const warn = [];
const fail = (route, msg) => failures.push(`${route} — ${msg}`);

/* ------------------------------------------------------------- helpers */
const metaOf = (html, key, attr) => {
  const re = new RegExp(
    `<meta[^>]+${attr}=["']${key}["'][^>]*content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]*${attr}=["']${key}["']`,
    "i",
  );
  const m = html.match(re);
  return m ? (m[1] ?? m[2]) : null;
};
const og = (html, k) => metaOf(html, k, "property") ?? metaOf(html, k, "name");
const name = (html, k) => metaOf(html, k, "name");

const jsonLdOf = (html) =>
  [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map(
    (m) => m[1],
  );

const imageCache = new Map();
async function imageOk(url) {
  if (imageCache.has(url)) return imageCache.get(url);
  const local = url.startsWith(PUBLIC_ORIGIN)
    ? ORIGIN + url.slice(PUBLIC_ORIGIN.length)
    : url;
  let result;
  try {
    const res = await fetch(local, { redirect: "follow" });
    const type = res.headers.get("content-type") || "";
    result = res.ok && type.startsWith("image/") ? null : `HTTP ${res.status} (${type || "no content-type"})`;
  } catch (e) {
    result = `unreachable (${e.message})`;
  }
  imageCache.set(url, result);
  return result;
}

/* ------------------------------------------------------------- routes */
const sitemap = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(/^https?:\/\/[^/]+/, "") || "/",
);
if (!paths.length) {
  console.error("✖ Could not read /sitemap.xml — is the dev server running?");
  process.exit(1);
}

/* --------------------------------------------------------------- audit */
for (const path of paths) {
  let html;
  try {
    const res = await fetch(ORIGIN + path);
    if (!res.ok) {
      fail(path, `page returned HTTP ${res.status}`);
      continue;
    }
    html = await res.text();
  } catch (e) {
    fail(path, `fetch failed: ${e.message}`);
    continue;
  }

  const expected = PUBLIC_ORIGIN + (path === "/" ? "/" : path);

  // --- Open Graph --------------------------------------------------
  for (const key of ["og:title", "og:description", "og:type", "og:url", "og:image"]) {
    if (!og(html, key)) fail(path, `missing ${key}`);
  }
  const ogUrl = og(html, "og:url");
  if (ogUrl && ogUrl.replace(/\/$/, "") !== expected.replace(/\/$/, ""))
    fail(path, `og:url is ${ogUrl}, expected ${expected}`);

  const ogImage = og(html, "og:image");
  if (ogImage) {
    if (!/^https:\/\//.test(ogImage)) fail(path, `og:image must be an absolute https URL (got ${ogImage})`);
    else {
      const problem = await imageOk(ogImage);
      if (problem) fail(path, `og:image ${ogImage} → ${problem}`);
    }
    if (!og(html, "og:image:width") || !og(html, "og:image:height"))
      warn.push(`${path} — og:image has no width/height hint`);
    if (!og(html, "og:image:alt")) warn.push(`${path} — og:image has no alt text`);
  }

  // --- Twitter -----------------------------------------------------
  const card = name(html, "twitter:card");
  if (card !== "summary_large_image") fail(path, `twitter:card is "${card}" (expected summary_large_image)`);
  for (const key of ["twitter:title", "twitter:description", "twitter:image"]) {
    if (!name(html, key)) fail(path, `missing ${key}`);
  }
  const twImage = name(html, "twitter:image");
  if (twImage && !/^https:\/\//.test(twImage)) fail(path, `twitter:image must be absolute https (got ${twImage})`);

  // --- canonical ---------------------------------------------------
  const canonicals = [...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/gi)].map(
    (m) => m[1],
  );
  if (canonicals.length === 0) fail(path, "missing <link rel=canonical>");
  else if (canonicals.length > 1) fail(path, `${canonicals.length} canonical tags (must be exactly one)`);
  else if (canonicals[0].replace(/\/$/, "") !== expected.replace(/\/$/, ""))
    fail(path, `canonical is ${canonicals[0]}, expected ${expected}`);

  // --- JSON-LD -----------------------------------------------------
  const blocks = jsonLdOf(html);
  const parsed = [];
  for (const raw of blocks) {
    try {
      const data = JSON.parse(raw);
      for (const node of Array.isArray(data) ? data : [data]) {
        if (!node["@context"]) fail(path, "JSON-LD block missing @context");
        if (!node["@type"]) fail(path, "JSON-LD block missing @type");
        parsed.push(node);
      }
    } catch (e) {
      fail(path, `invalid JSON-LD: ${e.message}`);
    }
  }

  // --- JobPosting (careers) ---------------------------------------
  if (path === "/careers") {
    const job = parsed.find((n) => n["@type"] === "JobPosting");
    if (!job) fail(path, "no JobPosting JSON-LD found");
    else {
      for (const field of [
        "title",
        "description",
        "datePosted",
        "hiringOrganization",
        "jobLocation",
        "employmentType",
        "validThrough",
      ]) {
        if (!job[field]) fail(path, `JobPosting missing required field "${field}"`);
      }
      if (job.hiringOrganization && job.hiringOrganization["@type"] !== "Organization")
        fail(path, "JobPosting.hiringOrganization must be an Organization");
      if (job.jobLocation && job.jobLocation["@type"] !== "Place")
        fail(path, "JobPosting.jobLocation must be a Place");
      if (job.jobLocation?.address?.["@type"] !== "PostalAddress")
        fail(path, "JobPosting.jobLocation.address must be a PostalAddress");
      if (job.validThrough && new Date(job.validThrough) < new Date())
        fail(path, `JobPosting.validThrough (${job.validThrough}) is in the past — Google drops expired postings`);
    }
  }
}

/* -------------------------------------------------------------- report */
if (warn.length) {
  console.log(`\n⚠ ${warn.length} advisory note(s):`);
  for (const w of warn) console.log("  · " + w);
}
if (failures.length) {
  console.error(`\n✖ Structured data / social preview audit failed — ${failures.length} issue(s):\n`);
  for (const f of failures) console.error("  • " + f);
  process.exit(1);
}
console.log(`\n✔ Structured data audit passed — ${paths.length} routes with valid Open Graph, Twitter cards, canonicals and JSON-LD.`);
