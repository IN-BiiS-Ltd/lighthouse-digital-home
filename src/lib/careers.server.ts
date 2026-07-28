// Server-only helpers for the teacher application flow.
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const RECIPIENT_EMAIL = "ceo@lighthousecampus.com";
export const BUCKET = "teacher-cvs";

export type UploadedFile = {
  kind: string;
  name: string;
  type: string;
  size: number;
  base64: string;
};

export type TeacherApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  countryOfResidence: string;
  city: string;
  dateOfBirth?: string;
  gender?: string;
  positionAppliedFor: string;
  subject: string;
  qualification: string;
  university?: string;
  experienceYears: string;
  curriculumExperience: string[];
  currentEmployer?: string;
  currentPosition?: string;
  coverLetter?: string;
  motivation?: string;
  availableFrom?: string;
  files: UploadedFile[];
};

export type StoredFile = {
  kind: string;
  name: string;
  path: string;
  type: string;
  size: number;
  url: string | null;
};

export type SavedApplication = { id: string; files: StoredFile[] };

function decodeBase64(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-80);
}

export async function saveTeacherApplication(
  input: TeacherApplicationInput,
): Promise<SavedApplication> {
  const cv = input.files.find((f) => f.kind === "cv") ?? input.files[0];

  const { data, error } = await supabaseAdmin
    .from("teacher_applications")
    .insert({
      full_name: input.fullName,
      email: input.email,
      phone: input.phone,
      nationality: input.nationality,
      country_of_residence: input.countryOfResidence,
      city: input.city,
      date_of_birth: input.dateOfBirth || null,
      gender: input.gender || null,
      position_applied_for: input.positionAppliedFor,
      subject: input.subject,
      qualification: input.qualification,
      university: input.university || null,
      experience_years: input.experienceYears,
      curriculum_experience: input.curriculumExperience,
      current_employer: input.currentEmployer || null,
      current_position: input.currentPosition || null,
      cover_letter: input.coverLetter || null,
      motivation: input.motivation || null,
      available_from: input.availableFrom || null,
      message: input.motivation || null,
      cv_filename: cv?.name ?? null,
    })
    .select("id")
    .single();

  if (error) throw new Error(`Could not save application: ${error.message}`);
  const id = data.id as string;

  const stored: StoredFile[] = [];

  for (const file of input.files) {
    const path = `${id}/${file.kind}-${crypto.randomUUID()}-${safeName(file.name)}`;
    const { error: uploadError } = await supabaseAdmin.storage
      .from(BUCKET)
      .upload(path, decodeBase64(file.base64), {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (uploadError) throw new Error(`Upload failed: ${uploadError.message}`);

    const { error: docError } = await supabaseAdmin
      .from("application_documents")
      .insert({
        application_id: id,
        kind: file.kind,
        file_name: file.name,
        file_path: path,
        content_type: file.type || null,
        size_bytes: file.size,
      });
    if (docError) throw new Error(`Could not record document: ${docError.message}`);

    const { data: signed } = await supabaseAdmin.storage
      .from(BUCKET)
      .createSignedUrl(path, 60 * 60 * 24 * 30);

    stored.push({
      kind: file.kind,
      name: file.name,
      path,
      type: file.type,
      size: file.size,
      url: signed?.signedUrl ?? null,
    });
  }

  if (cv) {
    const cvPath = stored.find((f) => f.kind === cv.kind && f.name === cv.name)?.path;
    if (cvPath) {
      await supabaseAdmin
        .from("teacher_applications")
        .update({ cv_path: cvPath })
        .eq("id", id);
    }
  }

  return { id, files: stored };
}

/** Signed download link for an admin, valid for one hour. */
export async function signedDocumentUrl(path: string) {
  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET)
    .createSignedUrl(path, 60 * 60);
  if (error) throw new Error(error.message);
  return data.signedUrl;
}
