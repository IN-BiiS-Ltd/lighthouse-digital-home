import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Download, Loader2, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  APPLICATION_STATUSES,
  STATUS_LABELS,
  SUBJECTS,
  applicationNumber,
  type ApplicationStatus,
} from "@/lib/careers-constants";
import {
  getDocumentUrl,
  listTeacherApplications,
  updateApplicationStatus,
} from "@/lib/careers-admin.functions";

export const Route = createFileRoute("/_authenticated/admin/applications")({
  head: () => ({
    meta: [
      { title: "Applications Dashboard — Lighthouse Campus" },
      {
        name: "description",
        content:
          "Internal dashboard for reviewing, filtering and progressing teacher applications submitted to Lighthouse Campus.",
      },
      { property: "og:title", content: "Applications Dashboard — Lighthouse Campus" },
      {
        property: "og:description",
        content: "Internal recruitment dashboard for Lighthouse Campus administrators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ApplicationsDashboard,
});

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";

function ApplicationsDashboard() {
  const list = useServerFn(listTeacherApplications);
  const updateStatus = useServerFn(updateApplicationStatus);
  const documentUrl = useServerFn(getDocumentUrl);
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filters = useMemo(
    () => ({
      search: search.trim() || undefined,
      subject: subject || undefined,
      status: status || undefined,
    }),
    [search, subject, status],
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["teacher-applications", filters],
    queryFn: () => list({ data: filters }),
  });

  const mutate = useMutation({
    mutationFn: (input: { id: string; status: ApplicationStatus }) =>
      updateStatus({ data: input }),
    onSuccess: () => {
      toast.success("Status updated");
      queryClient.invalidateQueries({ queryKey: ["teacher-applications"] });
    },
    onError: () => toast.error("Could not update the status"),
  });

  async function download(path: string) {
    try {
      const { url } = await documentUrl({ data: { path } });
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      toast.error("Could not open the document");
    }
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-medium">Teacher applications</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Review submissions, download attachments and move candidates through the
        recruitment process.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              id="search"
              className="pl-9"
              placeholder="Name, email, subject…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subjectFilter">Subject</Label>
          <select
            id="subjectFilter"
            className={selectClass}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">All subjects</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="statusFilter">Status</Label>
          <select
            id="statusFilter"
            className={selectClass}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All statuses</option>
            {APPLICATION_STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isLoading && (
        <p className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" aria-hidden /> Loading applications…
        </p>
      )}

      {error && (
        <p className="mt-10 text-sm text-destructive">
          You do not have permission to view applications, or the list could not be
          loaded.
        </p>
      )}

      {data && data.length === 0 && (
        <p className="mt-10 text-sm text-muted-foreground">No applications match your filters.</p>
      )}

      <div className="mt-8 space-y-4">
        {data?.map((application) => (
          <article
            key={application.id}
            className="rounded-xl border border-border/70 bg-card p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-lg font-medium">{application.full_name}</h2>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {applicationNumber(application.id)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {application.position_applied_for ?? "—"} · {application.subject} ·{" "}
                  {application.experience_years} yrs
                </p>
                <p className="text-sm text-muted-foreground">
                  {application.email} · {application.phone}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <select
                  aria-label={`Status for ${application.full_name}`}
                  className={selectClass + " w-44"}
                  value={application.status ?? "new"}
                  onChange={(e) =>
                    mutate.mutate({
                      id: application.id,
                      status: e.target.value as ApplicationStatus,
                    })
                  }
                >
                  {APPLICATION_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {STATUS_LABELS[s]}
                    </option>
                  ))}
                </select>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setExpanded(expanded === application.id ? null : application.id)
                  }
                >
                  {expanded === application.id ? "Hide details" : "View details"}
                </Button>
              </div>
            </div>

            {expanded === application.id && (
              <dl className="mt-5 grid gap-3 border-t border-border/60 pt-5 text-sm sm:grid-cols-2">
                {[
                  ["Nationality", application.nationality],
                  ["Country of residence", application.country_of_residence],
                  ["City", application.city],
                  ["Date of birth", application.date_of_birth],
                  ["Gender", application.gender],
                  ["Highest qualification", application.qualification],
                  ["University", application.university],
                  ["Curriculum experience", application.curriculum_experience?.join(", ")],
                  ["Current employer", application.current_employer],
                  ["Current position", application.current_position],
                  ["Earliest start date", application.available_from],
                  ["Submitted", new Date(application.created_at).toLocaleString()],
                  ["Cover letter", application.cover_letter],
                  ["Motivation", application.motivation],
                ].map(([label, value]) => (
                  <div key={String(label)}>
                    <dt className="font-medium text-foreground">{label}</dt>
                    <dd className="whitespace-pre-wrap text-muted-foreground">
                      {value ? String(value) : "—"}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {application.documents.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                {application.documents.map((doc) => (
                  <Button
                    key={doc.id}
                    variant="outline"
                    size="sm"
                    onClick={() => download(doc.file_path)}
                  >
                    <Download className="mr-2 size-4" aria-hidden />
                    {doc.file_name}
                  </Button>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
