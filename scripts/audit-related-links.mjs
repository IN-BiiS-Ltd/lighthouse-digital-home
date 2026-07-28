#!/usr/bin/env node
/**
 * Lighthouse Campus — Related-links navigation audit.
 *
 * Related blocks exist for FORWARD navigation only. This script builds the
 * full internal link graph from every route's `related` array and enforces:
 *
 *   FAIL  · self-link            (page links back to itself)
 *   FAIL  · duplicate target     (same destination twice in one block)
 *   FAIL  · broken target        (route does not exist)
 *   FAIL  · redirect target      (points at a 301 hop instead of the canonical URL)
 *   FAIL  · reciprocal pair      (A -> B and B -> A: a 2-page loop)
 *   FAIL  · closed cycle         (A -> B -> C -> A)
 *   WARN  · orphan page          (no related block links to it)
 *   WARN  · over-linked hub      (referenced by more than HUB_LIMIT pages)
 *
 * A supervisor report is written to reports/related-links-report.md on every
 * run so content updates always leave an auditable trail.
 *
 *   node scripts/audit-related-links.mjs
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROUTES_DIR = "src/routes";
const REPORT_PATH = "reports/related-links-report.md";
const HUB_LIMIT = 12;

/* ------------------------------------------------------------ route discovery */
const walkDir = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return walkDir(full);
    return /\.tsx?$/.test(entry) && !entry.startsWith("__") && entry !== "routeTree.gen.ts" ? [full] : [];
  });
const files = walkDir(ROUTES_DIR);

// Flat-route ids use a trailing underscore for non-nesting segments
// (/about_/vision) while links use the real URL (/about/vision).
const toUrl = (id) => id.replace(/_\//g, "/").replace(/\/$/, "") || "/";

const pages = [];
const redirectRoutes = new Map(); // route id -> redirect destination

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const m = src.match(/createFileRoute\(\s*["']([^"']+)["']\s*\)/);
  if (!m) continue;
  const id = toUrl(m[1]);
  if (id.startsWith("/api")) continue;

  const redirect = src.match(/redirect\(\s*{[^}]*to:\s*["']([^"']+)["']/);
  if (redirect && /beforeLoad/.test(src)) redirectRoutes.set(id, redirect[1]);

  pages.push({ id, file, src });
}
const routeIds = new Set(pages.map((p) => p.id));

/* --------------------------------------------------------- related extraction */
const edges = new Map(); // from -> [to]
const failures = [];

const normalise = (t) => (t.split("#")[0].replace(/\/$/, "") || "/");

for (const page of pages) {
  const targets = [];
  for (const m of page.src.matchAll(/"?related"?\s*:\s*\[/g)) {
    let depth = 0;
    const start = m.index + m[0].length - 1;
    let end = start;
    for (let i = start; i < page.src.length; i++) {
      if (page.src[i] === "[") depth++;
      else if (page.src[i] === "]" && --depth === 0) {
        end = i;
        break;
      }
    }
    const block = page.src.slice(start, end + 1);
    const seen = new Set();
    for (const t of [...block.matchAll(/"?to"?\s*:\s*"([^"]+)"/g)].map((x) => x[1])) {
      if (!t.startsWith("/")) continue;
      const to = normalise(t);
      if (to === page.id) failures.push(`Self-link — ${page.id} links back to itself`);
      else if (!routeIds.has(to)) failures.push(`Broken link — ${page.id} -> ${to} (no such route)`);
      else if (redirectRoutes.has(to))
        failures.push(`Redirect hop — ${page.id} -> ${to}; link ${redirectRoutes.get(to)} directly`);
      if (seen.has(to)) failures.push(`Duplicate target — ${page.id} lists ${to} twice`);
      seen.add(to);
      if (to !== page.id && routeIds.has(to)) targets.push(to);
    }
  }
  edges.set(page.id, [...new Set(targets)]);
}

/* ------------------------------------------------------------- loop detection */
const reciprocal = [];
for (const [from, tos] of edges) {
  for (const to of tos) {
    if (from < to && (edges.get(to) || []).includes(from)) reciprocal.push([from, to]);
  }
}
for (const [a, b] of reciprocal)
  failures.push(`Reciprocal loop — ${a} <-> ${b}; related links must move forward, keep one direction only`);

// Longer closed cycles (A -> B -> C -> A), ignoring the reciprocal pairs above.
const cycles = [];
const colour = new Map();
const stack = [];
const walk = (node) => {
  colour.set(node, 1);
  stack.push(node);
  for (const next of edges.get(node) || []) {
    if ((edges.get(next) || []).includes(node)) continue; // already reported as reciprocal
    if (colour.get(next) === 1) {
      const cycle = stack.slice(stack.indexOf(next)).concat(next);
      const key = cycle.join(">");
      if (!cycles.some((c) => c.join(">") === key)) cycles.push(cycle);
    } else if (!colour.has(next)) walk(next);
  }
  stack.pop();
  colour.set(node, 2);
};
for (const id of edges.keys()) if (!colour.has(id)) walk(id);
for (const c of cycles) failures.push(`Closed loop — ${c.join(" -> ")}; break the cycle so navigation stays forward`);

/* --------------------------------------------------------------- graph health */
const inbound = new Map([...routeIds].map((id) => [id, 0]));
for (const tos of edges.values()) for (const to of tos) inbound.set(to, (inbound.get(to) || 0) + 1);

const warnings = [];
const orphans = [...inbound].filter(([id, n]) => n === 0 && id !== "/").map(([id]) => id);
for (const o of orphans) warnings.push(`Orphan — no related block points to ${o}`);
const hubs = [...inbound].filter(([, n]) => n > HUB_LIMIT).sort((a, b) => b[1] - a[1]);
for (const [id, n] of hubs) warnings.push(`Over-linked — ${id} is referenced by ${n} pages (limit ${HUB_LIMIT})`);

/* ------------------------------------------------------- supervisor report */
const totalEdges = [...edges.values()].reduce((n, t) => n + t.length, 0);
const stamp = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";
const list = (arr) => (arr.length ? arr.map((x) => `- ${x}`).join("\n") : "- None");

const report = `# Related Links — Supervisor Report
_Generated ${stamp} · تقرير المشرف لروابط "Related"_

## Summary / الملخص
| Metric | Value |
| --- | --- |
| Routes audited | ${pages.length} |
| Related links | ${totalEdges} |
| Blocking issues | ${failures.length} |
| Advisories | ${warnings.length} |
| Status | ${failures.length ? "❌ FAILED" : "✅ PASSED"} |

## Blocking issues / مخالفات توقف النشر
${list(failures)}

## Advisories / ملاحظات
${list(warnings)}

## Most referenced destinations / الأكثر ارتباطًا
${[...inbound]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .map(([id, n]) => `- ${id} — ${n} inbound`)
  .join("\n")}

---
Rules: related links are forward navigation only — no self-links, no repeated
targets, no redirect hops, no reciprocal pairs and no closed loops.
`;
mkdirSync("reports", { recursive: true });
writeFileSync(REPORT_PATH, report);

/* ------------------------------------------------------------------- output */
console.log(`Report written to ${REPORT_PATH}`);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} advisory note(s):`);
  for (const w of warnings) console.log("  · " + w);
}
if (failures.length) {
  console.error(`\n✖ Related-links audit failed — ${failures.length} issue(s):\n`);
  for (const f of failures) console.error("  • " + f);
  process.exit(1);
}
console.log(`\n✔ Related-links audit passed — ${pages.length} routes, ${totalEdges} forward links, no self-links or loops.`);
