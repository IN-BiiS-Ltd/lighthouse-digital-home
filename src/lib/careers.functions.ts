import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MAX_BASE64 = 14_000_000; // ~10 MB binary

const fileSchema = z.object({
  kind: z.enum([
    "cv",
    "cover_letter",
    "teaching_certificate",
    "academic_degree",
    "other",
  ]),
  name: z.string().trim().min(1).max(200),
  type: z.string().trim().max(160),
  size: z.number().int().nonnegative().max(10 * 1024 * 1024),
  base64: z.string().max(MAX_BASE64),
});

const applicationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(40),
  nationality: z.string().trim().min(2).max(80),
  countryOfResidence: z.string().trim().min(2).max(80),
  city: z.string().trim().min(2).max(80),
  dateOfBirth: z.string().trim().max(20).optional(),
  gender: z.string().trim().max(30).optional(),
  positionAppliedFor: z.string().trim().min(2).max(120),
  subject: z.string().trim().min(2).max(80),
  qualification: z.string().trim().min(2).max(160),
  university: z.string().trim().max(160).optional(),
  experienceYears: z.string().trim().min(1).max(40),
  curriculumExperience: z.array(z.string().trim().max(80)).max(10).default([]),
  currentEmployer: z.string().trim().max(160).optional(),
  currentPosition: z.string().trim().max(160).optional(),
  coverLetter: z.string().trim().max(5000).optional(),
  motivation: z.string().trim().max(5000).optional(),
  availableFrom: z.string().trim().max(20).optional(),
  files: z.array(fileSchema).min(1).max(8),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

export const submitTeacherApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const { website: _honeypot, ...application } = data;
    if (!application.files.some((f) => f.kind === "cv")) {
      throw new Error("A CV or resume is required.");
    }
    const { saveTeacherApplication, notifyTeacherApplication, applicationNumber } =
      await import("./careers-notify.server");
    const saved = await saveTeacherApplication(application);
    const emailed = await notifyTeacherApplication(application, saved);
    return {
      ok: true as const,
      id: saved.id,
      reference: applicationNumber(saved.id),
      emailed,
    };
  });

