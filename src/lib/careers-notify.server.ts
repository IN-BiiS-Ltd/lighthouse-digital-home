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

const row = (label: string, value?: string | null) =>
  `<tr><td style="padding:6px 12px;font-weight:600;color:#0b2545;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#333">${
    value && value.trim() ? escapeHtml(value) : "—"
  }</td></tr>`;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildAdminHtml(input: TeacherApplicationInput, saved: SavedApplication) {
  const docs = saved.files.length
    ? saved.files
        .map(
          (f) =>
            `<li>${escapeHtml(f.kind)} — ${
              f.url
                ? `<a href="${f.url}">${escapeHtml(f.name)}</a>`
                : escapeHtml(f.name)
            }</li>`,
        )
        .join("")
    : "<li>No documents attached</li>";

  return `
    <div style="font-family:Georgia,serif;max-width:680px">
      <h2 style="color:#0b2545">New teacher application — Lighthouse Campus</h2>
      <h3 style="color:#0b2545">Personal information</h3>
      <table style="border-collapse:collapse;width:100%">
        ${row("Full name", input.fullName)}
        ${row("Email", input.email)}
        ${row("Mobile", input.phone)}
        ${row("Nationality", input.nationality)}
        ${row("Country of residence", input.countryOfResidence)}
        ${row("City", input.city)}
        ${row("Date of birth", input.dateOfBirth)}
        ${row("Gender", input.gender)}
      </table>
      <h3 style="color:#0b2545">Professional information</h3>
      <table style="border-collapse:collapse;width:100%">
        ${row("Position applied for", input.positionAppliedFor)}
        ${row("Subject / specialization", input.subject)}
        ${row("Highest qualification", input.qualification)}
        ${row("University", input.university)}
        ${row("Years of experience", input.experienceYears)}
        ${row("Curriculum experience", input.curriculumExperience.join(", "))}
        ${row("Current employer", input.currentEmployer)}
        ${row("Current position", input.currentPosition)}
        ${row("Earliest start date", input.availableFrom)}
      </table>
      <h3 style="color:#0b2545">Additional information</h3>
      <table style="border-collapse:collapse;width:100%">
        ${row("Cover letter", input.coverLetter)}
        ${row("Why Lighthouse Campus", input.motivation)}
      </table>
      <h3 style="color:#0b2545">Documents</h3>
      <ul>${docs}</ul>
      <p style="color:#777;font-size:12px">Application number: ${applicationNumber(saved.id)}</p>
    </div>`;
}

function buildApplicantHtml(input: TeacherApplicationInput, saved: SavedApplication) {
  const documents = saved.files.length
    ? saved.files.map((f) => escapeHtml(f.name)).join(", ")
    : "—";

  return `
    <div style="font-family:Georgia,serif;max-width:600px;color:#333">
      <h2 style="color:#0b2545">Thank you for your application</h2>
      <p>Dear ${escapeHtml(input.fullName)},</p>
      <p>Your application has been received successfully. Please keep your
      application number for any future correspondence.</p>

      <p style="background:#0b2545;color:#e9c46a;padding:12px 18px;border-radius:8px;
      display:inline-block;font-size:18px;letter-spacing:1px">
        ${applicationNumber(saved.id)}
      </p>

      <h3 style="color:#0b2545">Summary of your application</h3>
      <table style="border-collapse:collapse;width:100%">
        ${row("Full name", input.fullName)}
        ${row("Email", input.email)}
        ${row("Mobile", input.phone)}
        ${row("Nationality", input.nationality)}
        ${row("Residence", `${input.city}, ${input.countryOfResidence}`)}
        ${row("Position applied for", input.positionAppliedFor)}
        ${row("Subject / specialization", input.subject)}
        ${row("Highest qualification", input.qualification)}
        ${row("University", input.university)}
        ${row("Years of experience", input.experienceYears)}
        ${row("Curriculum experience", input.curriculumExperience.join(", "))}
        ${row("Earliest start date", input.availableFrom)}
        ${row("Documents received", documents)}
        ${row("Submitted on", new Date().toUTCString())}
      </table>

      <p>Our recruitment team will review your application and contact you if your
      profile matches our current requirements.</p>
      <p style="color:#0b2545">Lighthouse Campus · 66 El-Zahraa, Ad Doqi, Dokki, Giza, Egypt</p>
    </div>`;

}

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
    subject: `New Teacher Application – ${input.fullName} – ${input.subject}`,
    html: buildAdminHtml(input, saved),
    attachments,
  });

  await sendEmail({
    to: [input.email],
    reply_to: RECIPIENT_EMAIL,
    subject: `Application received — ${applicationNumber(saved.id)} — Lighthouse Campus`,
    html: buildApplicantHtml(input, saved),
  });


  return adminSent;
}
