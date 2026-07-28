import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, Paperclip, X } from "lucide-react";

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

const SUBJECTS = [
  "Science",
  "Mathematics",
  "English Language",
  "Arts",
  "Social Studies",
  "Arabic Language",
  "Physical Education",
  "ICT",
  "Music",
  "Other",
];

const MAX_BYTES = 5 * 1024 * 1024;

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

export function ApplyToTeachDialog() {
  const submit = useServerFn(submitTeacherApplication);
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);

    if (file && file.size > MAX_BYTES) {
      toast.error("CV file is too large", {
        description: "Please attach a file of 5 MB or less.",
      });
      return;
    }

    setPending(true);
    try {
      const payload = {
        fullName: String(values.get("fullName") ?? ""),
        email: String(values.get("email") ?? ""),
        phone: String(values.get("phone") ?? ""),
        subject: String(values.get("subject") ?? ""),
        qualification: String(values.get("qualification") ?? ""),
        experienceYears: String(values.get("experienceYears") ?? ""),
        message: String(values.get("message") ?? "") || undefined,
        ...(file
          ? {
              cvFilename: file.name,
              cvType: file.type || "application/octet-stream",
              cvBase64: await toBase64(file),
            }
          : {}),
      };

      await submit({ data: payload });

      toast.success("Application received", {
        description:
          "Thank you — your application and CV have reached our recruitment team.",
      });
      form.reset();
      setFile(null);
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("We could not send your application", {
        description:
          "Please try again, or email your CV to ceo@lighthousecampus.com.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">
            Teaching application — 2025 / 2026
          </DialogTitle>
          <DialogDescription>
            Complete your details and attach your CV. Your application is sent
            directly to our recruitment team at ceo@lighthousecampus.com.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" name="fullName" required minLength={2} autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" name="phone" required autoComplete="tel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject applied for</Label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="" disabled>
                  Choose a subject
                </option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="qualification">Highest qualification</Label>
              <Input
                id="qualification"
                name="qualification"
                required
                placeholder="e.g. BSc Physics, PGCE"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experienceYears">Years of teaching experience</Label>
              <Input id="experienceYears" name="experienceYears" required placeholder="e.g. 5" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">A short note (optional)</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              maxLength={2000}
              placeholder="Tell us how you would contribute to the Lighthouse classroom."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cv">Attach your CV (PDF or Word, max 5 MB)</Label>
            <input
              ref={fileInput}
              id="cv"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInput.current?.click()}
              >
                <Paperclip className="mr-2 size-4" aria-hidden />
                Choose file
              </Button>
              {file ? (
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  {file.name}
                  <button
                    type="button"
                    aria-label="Remove attached CV"
                    className="rounded-full p-1 hover:bg-muted"
                    onClick={() => {
                      setFile(null);
                      if (fileInput.current) fileInput.current.value = "";
                    }}
                  >
                    <X className="size-3.5" aria-hidden />
                  </button>
                </span>
              ) : (
                <span className="text-sm text-muted-foreground">No file selected</span>
              )}
            </div>
          </div>

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
      </DialogContent>
    </Dialog>
  );
}
