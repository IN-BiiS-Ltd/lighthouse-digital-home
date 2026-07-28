#!/usr/bin/env node
/**
 * Lighthouse Campus — content uniqueness audit.
 *
 * Guards every route under src/routes against the duplication patterns that
 * hurt SEO and reader trust:
 *   1. duplicate <title> values
 *   2. duplicate meta descriptions
 *   3. duplicate H1 / page titles inside page config
 *   4. duplicate intro paragraphs
 *   5. duplicate long body paragraphs shared across pages
 *   6. "Related" links that self-reference, repeat, point at a missing route,
 *      or point at a route that only 301-redirects elsewhere
 *
 * Run: npm run audit:content   (exit code 1 when any rule fails)
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src/routes";
const MIN_PARAGRAPH = 120; // chars — shorter strings are labels, not content

/* ------------------------------------------------------------------ utils */
function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return walk(full);
    return /\.tsx?$/.test(entry) ? [full] : [];
  });
}

const norm = (s) =>
  s
    .replace(/\\"/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const routeIdOf = (src) => {
  const m = src.match(/createFileRoute\(\s*"([^"]+)"/);
  if (!m) return null;
  // "_" suffix segments (news_/school-news) are non-nesting: URL drops the "_"
  return m[1].replace(/_(?=\/)/g, "").replace(/\/$/, "") || "/";
};

function matchAll(src, re) {
  return [...src.matchAll(re)].map((m) => m.slice(1).find(Boolean)).filter(Boolean);
}

/* ------------------------------------------------------ collect page facts */
const files = walk(ROOT).sort();
const pages = [];
const routeIds = new Set();
const redirectRoutes = new Map(); // route id -> redirect target

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const id = routeIdOf(src);
  if (!id) continue;
  routeIds.add(id);

  const redirect = src.match(/redirect\(\s*\{\s*to:\s*"([^"]+)"/);
  if (redirect) redirectRoutes.set(id, redirect[1]);

  pages.push({
    file,
    id,
    src,
    titles: matchAll(src, /\{\s*title:\s*"((?:[^"\\]|\\.)*)"\s*\}/g),
    descriptions: matchAll(
      src,
      /name:\s*"description",\s*content:\s*"((?:[^"\\]|\\.)*)"/g,
    ),
    pageTitles: matchAll(src, /^\s*"?title"?:\s*"((?:[^"\\]|\\.)*)",?$/gm),
    intros: matchAll(src, /^\s*"?intro"?:\s*"((?:[^"\\]|\\.)*)",?$/gm),
    bodies: matchAll(src, /^\s*"?body"?:\s*"((?:[^"\\]|\\.)*)",?$/gm).filter(
      (b) => b.length >= MIN_PARAGRAPH,
    ),
  });
}

/* --------------------------------------------------------------- rule runs */
const failures = [];

function assertUnique(label, pick, { ignore = () => false } = {}) {
  const seen = new Map();
  for (const page of pages) {
    for (const value of pick(page)) {
      if (!value || ignore(value)) continue;
      const key = norm(value);
      if (!key) continue;
      if (!seen.has(key)) seen.set(key, []);
      seen.get(key).push(page);
    }
  }
  for (const [key, owners] of seen) {
    const unique = [...new Set(owners.map((p) => p.id))];
    if (unique.length > 1) {
      failures.push(
        `${label} duplicated across ${unique.join(", ")}\n    "${key.slice(0, 110)}…"`,
      );
    }
  }
}

assertUnique("Head <title>", (p) => p.titles);
assertUnique("Meta description", (p) => p.descriptions);
assertUnique("Page title / H1", (p) => p.pageTitles);
assertUnique("Intro paragraph", (p) => p.intros);
assertUnique(`Body paragraph (>=${MIN_PARAGRAPH} chars)`, (p) => p.bodies);

/* ------------------------------------------------------- related-link rules */
for (const page of pages) {
  for (const m of page.src.matchAll(/"?related"?\s*:\s*\[/g)) {
    let depth = 0;
    let start = m.index + m[0].length - 1;
    let end = start;
    for (let i = start; i < page.src.length; i++) {
      if (page.src[i] === "[") depth++;
      else if (page.src[i] === "]" && --depth === 0) {
        end = i;
        break;
      }
    }
    const block = page.src.slice(start, end + 1);
    const targets = matchAll(block, /"?to"?\s*:\s*"([^"]+)"/g)
      .filter((t) => t.startsWith("/"))
      .map((t) => t.split("#")[0].replace(/\/$/, "") || "/");

    const seen = new Set();
    for (const to of targets) {
      if (to === page.id) failures.push(`Related self-link on ${page.id} -> ${to}`);
      if (!routeIds.has(to)) failures.push(`Related link on ${page.id} -> ${to} (route does not exist)`);
      if (redirectRoutes.has(to))
        failures.push(
          `Related link on ${page.id} -> ${to} points at a 301 redirect; link ${redirectRoutes.get(to)} directly`,
        );
      if (seen.has(to)) failures.push(`Related link repeated on ${page.id} -> ${to}`);
      seen.add(to);
    }
  }
}

/* ------------------------------------------------------------------ report */
if (failures.length) {
  console.error(`\n✖ Content audit failed — ${failures.length} issue(s):\n`);
  for (const f of failures) console.error("  • " + f);
  console.error(
    "\nEvery internal page needs its own title, meta description, intro and body copy.\n",
  );
  process.exit(1);
}

console.log(`✔ Content audit passed — ${pages.length} routes, no duplicate titles, descriptions, intros, body copy or related links.`);
