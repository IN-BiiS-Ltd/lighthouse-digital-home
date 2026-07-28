import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const applicationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(40),
  subject: z.string().trim().min(2).max(80),
  qualification: z.string().trim().min(2).max(160),
  experienceYears: z.string().trim().min(1).max(40),
  message: z.string().trim().max(2000).optional(),
  cvFilename: z.string().trim().max(200).optional(),
  cvType: z.string().trim().max(120).optional(),
  // base64 payload, capped at ~5 MB of raw file
  cvBase64: z.string().max(7_500_000).optional(),
});

export const submitTeacherApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const { saveTeacherApplication, notifyTeacherApplication } = await import(
      "./careers-notify.server"
    );
    const saved = await saveTeacherApplication(data);
    const emailed = await notifyTeacherApplication(data, saved);
    return { ok: true as const, id: saved.id, emailed };
  });
