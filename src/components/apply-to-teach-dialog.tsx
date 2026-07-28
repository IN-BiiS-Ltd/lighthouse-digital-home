import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Paperclip, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitTeacherApplication } from "@/lib/careers.functions";
import {
  ACCEPTED_FILE_TYPES,
  CURRICULA,
  DOCUMENT_KINDS,
  MAX_FILE_BYTES,
  POSITIONS,
  SUBJECTS,
} from "@/lib/careers-constants";

type PickedFile = { kind: string; file: File };

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read the file"));
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.readAsDataURL(file);
  });
}

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function DocumentPicker({
  kind,
  label,
  required,
  multiple,
  files,
  onAdd,
  onRemove,
}: {
  kind: string;
  label: string;
  required: boolean;
  multiple: boolean;
  files: PickedFile[];
  onAdd: (kind: string, list: FileList | null) => void;
  onRemove: (kind: string, name: string) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const mine = files.filter((f) => f.kind === kind);

  return (
    <div className="rounded-lg border border-border/70 p-4">
      <p className="text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </p>
      <input
        ref={input}
        type="file"
        multiple={multiple}
        accept={ACCEPTED_FILE_TYPES}
        className="sr-only"
        onChange={(e) => {
          onAdd(kind, e.target.files);
          if (input.current) input.current.value = "";
        }}
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button type="button" variant="outline" size="sm" onClick={() => input.current?.click()}>
          <Paperclip className="mr-2 size-4" aria-hidden />
          Choose file{multiple ? "s" : ""}
        </Button>
        {mine.length === 0 && (
          <span className="text-sm text-muted-foreground">No file selected</span>
        )}
      </div>
      {mine.length > 0 && (
        <ul className="mt-3 space-y-1">
          {mine.map((f) => (
            <li
              key={f.file.name}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              {f.file.name}
              <button
                type="button"
                aria-label={`Remove ${f.file.name}`}
                className="rounded-full p-1 hover:bg-muted"
                onClick={() => onRemove(kind, f.file.name)}
              >
                <X className="size-3.5" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ApplyToTeachDialog() {
  const submit = useServerFn(submitTeacherApplication);
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [files, setFiles] = useState<PickedFile[]>([]);

  function addFiles(kind: string, list: FileList | null) {
    if (!list?.length) return;
    const picked = Array.from(list);
    const tooBig = picked.find((f) => f.size > MAX_FILE_BYTES);
    if (tooBig) {
      toast.error("File too large", {
        description: `${tooBig.name} exceeds the 10 MB limit.`,
      });
      return;
    }
    const spec = DOCUMENT_KINDS.find((d) => d.kind === kind);
    setFiles((prev) => {
      const others = spec?.multiple ? prev : prev.filter((f) => f.kind !== kind);
      const next = [...others];
      for (const file of picked) {
        if (!next.some((f) => f.kind === kind && f.file.name === file.name)) {
          next.push({ kind, file });
        }
      }
      return next.slice(0, 8);
    });
  }

  function removeFile(kind: string, name: string) {
    setFiles((prev) => prev.filter((f) => !(f.kind === kind && f.file.name === name)));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);

    if (!files.some((f) => f.kind === "cv")) {
      toast.error("CV required", { description: "Please attach your CV or resume." });
      return;
    }

    const str = (name: string) => String(values.get(name) ?? "").trim();
    const opt = (name: string) => str(name) || undefined;

    setPending(true);
    try {
      const payload = {
        fullName: str("fullName"),
        email: str("email"),
        phone: str("phone"),
        nationality: str("nationality"),
        countryOfResidence: str("countryOfResidence"),
        city: str("city"),
        dateOfBirth: opt("dateOfBirth"),
        gender: opt("gender"),
        positionAppliedFor: str("positionAppliedFor"),
        subject: str("subject"),
        qualification: str("qualification"),
        university: opt("university"),
        experienceYears: str("experienceYears"),
        curriculumExperience: values.getAll("curriculumExperience").map(String),
        currentEmployer: opt("currentEmployer"),
        currentPosition: opt("currentPosition"),
        coverLetter: opt("coverLetter"),
        motivation: opt("motivation"),
        availableFrom: opt("availableFrom"),
        website: str("website"),
        files: await Promise.all(
          files.map(async ({ kind, file }) => ({
            kind: kind as "cv",
            name: file.name,
            type: file.type || "application/octet-stream",
            size: file.size,
            base64: await toBase64(file),
          })),
        ),
      };

      await submit({ data: payload });

      form.reset();
      setFiles([]);
      setDone(true);
    } catch (error) {
      console.error(error);
      toast.error("We could not send your application", {
        description: "Please try again, or email ceo@lighthousecampus.com.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setDone(false);
      }}
    >
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="rounded-full bg-gold px-7 text-navy hover:bg-gold/90"
          data-event="CTA Click"
          data-event-prop-label="Apply to teach"
          data-event-prop-placement="careers-hiring"
        >
          Apply to teach →
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-3xl">
        {done ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto size-12 text-gold" aria-hidden />
            <h2 className="mt-5 font-display text-2xl font-medium">
              Thank you for your application.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Your application has been received successfully. Our recruitment team
              will review your application and contact you if your profile matches
              our current requirements.
            </p>
            <Button
              className="mt-7 rounded-full bg-gold px-7 text-navy hover:bg-gold/90"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-medium">
                Teacher application — 2025 / 2026
              </DialogTitle>
              <DialogDescription>
                Complete the form and attach your documents. Your application is sent
                directly to our recruitment team at ceo@lighthousecampus.com.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 space-y-8">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />

              <section className="space-y-4">
                <h3 className="font-display text-lg font-medium">Personal information</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="fullName" label="Full name *">
                    <Input id="fullName" name="fullName" required minLength={2} autoComplete="name" />
                  </Field>
                  <Field id="email" label="Email address *">
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                  </Field>
                  <Field id="phone" label="Mobile number *">
                    <Input id="phone" name="phone" required autoComplete="tel" />
                  </Field>
                  <Field id="nationality" label="Nationality *">
                    <Input id="nationality" name="nationality" required />
                  </Field>
                  <Field id="countryOfResidence" label="Current country of residence *">
                    <Input id="countryOfResidence" name="countryOfResidence" required />
                  </Field>
                  <Field id="city" label="Current city *">
                    <Input id="city" name="city" required />
                  </Field>
                  <Field id="dateOfBirth" label="Date of birth">
                    <Input id="dateOfBirth" name="dateOfBirth" type="date" />
                  </Field>
                  <Field id="gender" label="Gender">
                    <select id="gender" name="gender" defaultValue="" className={selectClass}>
                      <option value="">Prefer not to say</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </Field>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="font-display text-lg font-medium">Professional information</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="positionAppliedFor" label="Position applying for *">
                    <select id="positionAppliedFor" name="positionAppliedFor" required defaultValue="" className={selectClass}>
                      <option value="" disabled>Choose a position</option>
                      {POSITIONS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="subject" label="Subject / specialization *">
                    <select id="subject" name="subject" required defaultValue="" className={selectClass}>
                      <option value="" disabled>Choose a subject</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="qualification" label="Highest qualification *">
                    <Input id="qualification" name="qualification" required placeholder="e.g. BSc Physics, PGCE" />
                  </Field>
                  <Field id="university" label="University">
                    <Input id="university" name="university" />
                  </Field>
                  <Field id="experienceYears" label="Years of teaching experience *">
                    <Input id="experienceYears" name="experienceYears" required placeholder="e.g. 5" />
                  </Field>
                  <Field id="currentEmployer" label="Current employer">
                    <Input id="currentEmployer" name="currentEmployer" />
                  </Field>
                  <Field id="currentPosition" label="Current position">
                    <Input id="currentPosition" name="currentPosition" />
                  </Field>
                  <Field id="availableFrom" label="Earliest available start date">
                    <Input id="availableFrom" name="availableFrom" type="date" />
                  </Field>
                </div>

                <fieldset className="space-y-2">
                  <legend className="text-sm font-medium">Curriculum experience</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {CURRICULA.map((c) => (
                      <label key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <input
                          type="checkbox"
                          name="curriculumExperience"
                          value={c}
                          className="size-4 rounded border-input accent-[hsl(var(--gold))]"
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </section>

              <section className="space-y-4">
                <h3 className="font-display text-lg font-medium">Additional information</h3>
                <Field id="coverLetter" label="Cover letter / personal statement">
                  <Textarea id="coverLetter" name="coverLetter" rows={4} maxLength={5000} />
                </Field>
                <Field id="motivation" label="Why do you want to join Lighthouse Campus?">
                  <Textarea id="motivation" name="motivation" rows={4} maxLength={5000} />
                </Field>
              </section>

              <section className="space-y-4">
                <h3 className="font-display text-lg font-medium">Upload documents</h3>
                <p className="text-sm text-muted-foreground">
                  PDF, DOC, DOCX or image files. Maximum 10 MB per file.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {DOCUMENT_KINDS.map((d) => (
                    <DocumentPicker
                      key={d.kind}
                      kind={d.kind}
                      label={d.label}
                      required={d.required}
                      multiple={d.multiple}
                      files={files}
                      onAdd={addFiles}
                      onRemove={removeFile}
                    />
                  ))}
                </div>
              </section>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={pending}
                  className="rounded-full bg-gold px-7 text-navy hover:bg-gold/90"
                >
                  {pending && <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />}
                  {pending ? "Sending…" : "Submit application"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  We only use your details for recruitment purposes.
                </p>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
