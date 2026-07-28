// Server-only: persistence + notification for teacher applications.
export {
  saveTeacherApplication,
  signedDocumentUrl,
  RECIPIENT_EMAIL,
  BUCKET,
  type TeacherApplicationInput,
  type SavedApplication,
  type UploadedFile,
  type StoredFile,
} from "./careers.server";

import { applicationNumber } from "./careers-constants";
export { applicationNumber };

import {
  RECIPIENT_EMAIL,
  type SavedApplication,
  type TeacherApplicationInput,
} from "./careers.server";

import {
  adminSubject,
  applicantSubject,
  buildAdminHtml,
  buildApplicantHtml,
} from "./careers-email-templates";

async function sendEmail(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.APPLICATION_FROM_EMAIL;
  if (!apiKey || !from) return false;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, ...payload }),
    });
    if (!res.ok) {
      console.error("[careers] email send failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("[careers] email send error", error);
    return false;
  }
}

/**
 * Emails the campus inbox (with attachments) and confirms receipt to the applicant.
 * Returns false when email delivery is not configured yet — the application is
 * still stored safely and visible in the internal dashboard.
 */
export async function notifyTeacherApplication(
  input: TeacherApplicationInput,
  saved: SavedApplication,
): Promise<boolean> {
  const attachments = input.files.map((f) => ({
    filename: f.name,
    content: f.base64,
  }));

  const adminSent = await sendEmail({
    to: [RECIPIENT_EMAIL],
    reply_to: input.email,
    subject: adminSubject(input),
    html: buildAdminHtml(input, saved),
    attachments,
  });

  await sendEmail({
    to: [input.email],
    reply_to: RECIPIENT_EMAIL,
    subject: applicantSubject(saved),
    html: buildApplicantHtml(input, saved),
  });


  return adminSent;
}
