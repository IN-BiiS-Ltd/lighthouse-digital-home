import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const listTeacherApplications = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        search: z.string().trim().max(120).optional(),
        subject: z.string().trim().max(80).optional(),
        status: z.string().trim().max(40).optional(),
      })
      .parse(data ?? {}),
  )
  .handler(async ({ data, context }) => {
    const { assertAdmin, fetchApplications } = await import("./careers-admin.server");
    await assertAdmin(context.supabase, context.userId);
    return fetchApplications(context.supabase, data);
  });

export const updateApplicationStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum([
          "new",
          "under_review",
          "shortlisted",
          "interview",
          "accepted",
          "rejected",
        ]),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { assertAdmin, setApplicationStatus } = await import("./careers-admin.server");
    await assertAdmin(context.supabase, context.userId);
    return setApplicationStatus(context.supabase, data.id, data.status);
  });

export const getDocumentUrl = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z.object({ path: z.string().trim().min(1).max(500) }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { assertAdmin } = await import("./careers-admin.server");
    await assertAdmin(context.supabase, context.userId);
    const { signedDocumentUrl } = await import("./careers.server");
    return { url: await signedDocumentUrl(data.path) };
  });

export const currentUserIsAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { isAdmin } = await import("./careers-admin.server");
    return { isAdmin: await isAdmin(context.supabase, context.userId) };
  });
