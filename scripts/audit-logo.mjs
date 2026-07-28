#!/usr/bin/env node
/**
 * audit-logo.mjs — Official logo enforcement
 *
 * Rule: every surface that shows the institutional logo (pages, components,
 * announcement posters) must use the ONE approved asset. No modified,
 * cropped, recoloured, AI-regenerated or legacy variants are permitted.
 *
 * Fails the build (exit 1) on any violation.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, extname } from "node:path";

const ROOT = process.cwd();

/** The single approved logo pointer. */
const CANONICAL_POINTER = "src/assets/lighthouse-official-logo.png.asset.json";
const CANONICAL_ASSET_ID = "5d38ff3c-f45d-40e5-9422-681697584e01";

/** Separate approved marks that are NOT the logo (flags/emblems of record). */
const ALLOWED_OTHER_MARKS = new Set([
  "src/assets/lighthouse-flag.png.asset.json",
  "src/assets/readers-international-flag.png.asset.json",
]);

/** Approved raster posters/icons in /public that legitimately embed the logo. */
const ALLOWED_PUBLIC_IMAGES = new Set([
  "favicon.ico",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "lighthouse-social-card.jpg",
  "admissions-2026-2027-a.png",
  "admissions-2026-2027-a.webp",
  "admissions-2026-2027-b.png",
  "admissions-2026-2027-b.webp",
  "teachers-hiring-2026-2027.png",
  "teachers-hiring-2026-2027.webp",
]);

/** Anything matching this in a source reference is a logo-bearing asset. */
const LOGO_ASSET_RE =
  /lighthouse[\w-]*(logo|lockup|emblem|mark|approved|transparent|watermark)[\w-]*\.(png|jpe?g|webp|avif|svg)/i;

const SCAN_DIRS = ["src", "scripts", "public"];
const CODE_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".html", ".md"]);

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry.startsWith(".")) continue;
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const errors = [];
const warnings = [];

/* 1 — the canonical pointer must exist and be unchanged. */
if (!existsSync(join(ROOT, CANONICAL_POINTER))) {
  errors.push(`Canonical logo pointer is missing: ${CANONICAL_POINTER}`);
} else {
  const pointer = JSON.parse(readFileSync(join(ROOT, CANONICAL_POINTER), "utf8"));
  if (pointer.asset_id !== CANONICAL_ASSET_ID) {
    errors.push(
      `${CANONICAL_POINTER} points at asset_id ${pointer.asset_id} — expected the approved ${CANONICAL_ASSET_ID}. ` +
        `The official logo must never be replaced or re-generated.`,
    );
  }
}

/* 2 — no source file may reference a non-canonical logo asset. */
const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)));
let referenceCount = 0;

for (const abs of files) {
  const rel = relative(ROOT, abs).replaceAll("\\", "/");
  if (rel.endsWith(".asset.json")) continue;
  if (!CODE_EXT.has(extname(abs))) continue;

  const text = readFileSync(abs, "utf8");
  const lines = text.split("\n");

  lines.forEach((line, i) => {
    const matches = line.match(new RegExp(LOGO_ASSET_RE, "gi"));
    if (!matches) return;
    for (const m of matches) {
      const isCanonical = m.toLowerCase() === "lighthouse-official-logo.png";
      const allowedMark = [...ALLOWED_OTHER_MARKS].some((a) => a.includes(m));
      const allowedPublic = ALLOWED_PUBLIC_IMAGES.has(m);
      referenceCount += 1;
      if (isCanonical || allowedMark || allowedPublic) continue;
      errors.push(
        `${rel}:${i + 1} uses a non-approved logo asset "${m}". ` +
          `Use "@/assets/lighthouse-official-logo.png.asset.json" instead.`,
      );
    }
  });
}

/* 3 — stray logo variants left in src/assets are flagged (unused = removable). */
const assetsDir = join(ROOT, "src/assets");
if (existsSync(assetsDir)) {
  const allCode = files
    .filter((f) => CODE_EXT.has(extname(f)))
    .map((f) => readFileSync(f, "utf8"))
    .join("\n");
  for (const entry of readdirSync(assetsDir)) {
    const base = entry.replace(/\.asset\.json$/, "");
    if (!LOGO_ASSET_RE.test(base)) continue;
    if (base === "lighthouse-official-logo.png") continue;
    if ([...ALLOWED_OTHER_MARKS].some((a) => a.endsWith(entry))) continue;
    if (allCode.includes(base)) continue; // already reported as an error above
    warnings.push(
      `src/assets/${entry} is an unused logo variant — keep the repo on the single approved asset.`,
    );
  }
}

/* Report */
console.log(`Official logo audit — scanned ${files.length} files, ${referenceCount} logo references.`);
if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of warnings) console.log(`  · ${w}`);
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} violation(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error(
    "\nOnly the approved Lighthouse Campus logo may be used — never modified, cropped or regenerated.",
  );
  process.exit(1);
}
console.log("✓ All logo usages reference the approved official asset.");
