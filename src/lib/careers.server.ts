// Server-only helpers for the teacher application flow.
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const RECIPIENT_EMAIL = "ceo@lighthousecampus.com";

export type TeacherApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  qualification: string;
  experienceYears: string;
  message?: string;
  cvFilename?: string;
  cvType?: string;
  cvBase64?: string;
};

function decodeBase64(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-80);
}

export async function saveTeacherApplication(input: TeacherApplicationInput) {
  let cvPath: string | null = null;

  if (input.cvBase64 && input.cvFilename) {
    const bytes = decodeBase64(input.cvBase64);
    cvPath = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName(input.cvFilename)}`;

    const { error: uploadError } = await supabaseAdmin.storage
      .from("teacher-cvs")
      .upload(cvPath, bytes, {
        contentType: input.cvType || "application/octet-stream",
        upsert: false,
      });

    if (uploadError) throw new Error(`CV upload failed: ${uploadError.message}`);
  }

  const { data, error } = await supabaseAdmin
    .from("teacher_applications")
    .insert({
      full_name: input.fullName,
      email: input.email,
      phone: input.phone,
      subject: input.subject,
      qualification: input.qualification,
      experience_years: input.experienceYears,
      message: input.message ?? null,
      cv_path: cvPath,
      cv_filename: input.cvFilename ?? null,
    })
    .select("id")
    .single();

  if (error) throw new Error(`Could not save application: ${error.message}`);

  let cvUrl: string | null = null;
  if (cvPath) {
    const { data: signed } = await supabaseAdmin.storage
      .from("teacher-cvs")
      .createSignedUrl(cvPath, 60 * 60 * 24 * 30);
    cvUrl = signed?.signedUrl ?? null;
  }

  return { id: data.id as string, cvUrl };
}
