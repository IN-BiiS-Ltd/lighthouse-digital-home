import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Container, Section, SmartLink } from "@/components/blocks";
import {
  redirectRecords,
  redirectIssues,
  redirectsGeneratedAt,
} from "@/data/redirects.generated";

export const Route = createFileRoute("/internal/redirects")({
  head: () => ({
    meta: [
      { title: "Redirect Board — Lighthouse Campus Internal Tools" },
      {
        name: "description",
        content:
          "Internal board listing every permanent 301 redirect on the Lighthouse Campus site, why it exists, and any internal link still pointing at a redirect hop.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Redirect Board — Internal Tools" },
      {
        property: "og:description",
        content:
          "Every 301 redirect with its purpose, plus alerts for links that target a redirect instead of the final page.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RedirectBoard,
});

function RedirectBoard() {
  const linksToRedirects = redirectRecords.flatMap((r) =>
    r.inboundLinks.map((l) => ({ ...l, from: r.from, to: r.to })),
  );
  const healthy = redirectIssues.length === 0;
  const stamp = redirectsGeneratedAt.replace("T", " ").slice(0, 16) + " UTC";

  return (
    <>
      <PageHero
        eyebrow="Internal tools"
        title="Redirect board"
        intro="Every permanent (301) redirect on the site, the reason it exists, and an alert whenever an internal link still points at a redirect instead of the final page."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Redirect board" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Redirects mapped" value={String(redirectRecords.length)} />
            <Stat label="Links to a redirect" value={String(linksToRedirects.length)} />
            <Stat
              label="Status"
              value={healthy ? "Healthy" : `${redirectIssues.length} issue(s)`}
              tone={healthy ? "ok" : "alert"}
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Generated {stamp} by <code>npm run audit:redirects</code>. Re-run the audit after any
            content update to refresh this board.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-semibold">Redirect map</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[46rem] text-left text-sm">
              <caption className="sr-only">
                Permanent redirects, their destinations and their purpose
              </caption>
              <thead className="bg-muted/60 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3">From (legacy URL)</th>
                  <th scope="col" className="px-4 py-3">To (canonical page)</th>
                  <th scope="col" className="px-4 py-3">Code</th>
                  <th scope="col" className="px-4 py-3">Purpose</th>
                  <th scope="col" className="px-4 py-3">Inbound links</th>
                </tr>
              </thead>
              <tbody>
                {redirectRecords.map((r) => (
                  <tr key={r.from} className="border-t border-border align-top">
                    <th scope="row" className="px-4 py-4 font-mono text-xs font-normal">
                      {r.from}
                    </th>
                    <td className="px-4 py-4">
                      <SmartLink to={r.to} className="font-mono text-xs underline underline-offset-4">
                        {r.to}
                      </SmartLink>
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-muted px-2 py-1 text-xs font-semibold">
                        {r.statusCode}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">{r.reason}</td>
                    <td className="px-4 py-4">
                      {r.inboundLinks.length === 0 ? (
                        <span className="text-muted-foreground">None</span>
                      ) : (
                        <ul className="space-y-1">
                          {r.inboundLinks.map((l) => (
                            <li key={`${l.file}:${l.line}`} className="font-mono text-xs text-destructive">
                              {l.file}:{l.line}
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-semibold">Alerts</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Internal navigation must always target the final page. Redirects are reserved for
            legacy and external traffic.
          </p>
          <div
            role="status"
            className={`mt-6 rounded-xl border p-6 ${
              healthy ? "border-border bg-muted/40" : "border-destructive/40 bg-destructive/5"
            }`}
          >
            {healthy ? (
              <p className="text-sm">
                No internal link points at a redirect, no redirect chains, and every destination
                resolves to a real page.
              </p>
            ) : (
              <ul className="space-y-2 text-sm">
                {redirectIssues.map((issue) => (
                  <li key={issue} className="text-destructive">
                    • {issue}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}

function Stat({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "ok" | "alert";
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        tone === "alert" ? "border-destructive/40 bg-destructive/5" : "border-border bg-card"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p
        className={`mt-2 font-display text-2xl font-semibold ${
          tone === "alert" ? "text-destructive" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
