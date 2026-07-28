// Pure email template builders — no backend imports, safe to render in tests.
import { applicationNumber } from "./careers-constants";

export type EmailApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  countryOfResidence: string;
  city: string;
  dateOfBirth?: string | null;
  gender?: string | null;
  positionAppliedFor: string;
  subject: string;
  qualification: string;
  university?: string | null;
  experienceYears: string;
  curriculumExperience: string[];
  currentEmployer?: string | null;
  currentPosition?: string | null;
  coverLetter?: string | null;
  motivation?: string | null;
  availableFrom?: string | null;
};

export type EmailSavedApplication = {
  id: string;
  files: Array<{ kind: string; name: string; url?: string | null }>;
};

export const row = (label: string, value?: string | null) =>
  `<tr><td style="padding:6px 12px;font-weight:600;color:#0b2545;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#333">${
    value && value.trim() ? escapeHtml(value) : "—"
  }</td></tr>`;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function adminSubject(input: EmailApplicationInput) {
  return `New Teacher Application – ${input.fullName} – ${input.subject}`;
}

export function applicantSubject(saved: EmailSavedApplication) {
  return `Application received — ${applicationNumber(saved.id)} — Lighthouse Campus`;
}

export function buildAdminHtml(
  input: EmailApplicationInput,
  saved: EmailSavedApplication,
) {
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

export function buildApplicantHtml(
  input: EmailApplicationInput,
  saved: EmailSavedApplication,
  submittedOn = new Date(),
) {
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
        ${row("Submitted on", submittedOn.toUTCString())}
      </table>

      <p>Our recruitment team will review your application and contact you if your
      profile matches our current requirements.</p>
      <p style="color:#0b2545">Lighthouse Campus · 66 El-Zahraa, Ad Doqi, Dokki, Giza, Egypt</p>
    </div>`;
}
