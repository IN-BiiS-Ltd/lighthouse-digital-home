// Server-only: persistence + notification for teacher applications.
export {
  saveTeacherApplication,
  RECIPIENT_EMAIL,
  type TeacherApplicationInput,
} from "./careers.server";

import { RECIPIENT_EMAIL, type TeacherApplicationInput } from "./careers.server";

type SavedApplication = { id: string; cvUrl: string | null };

function buildHtml(input: TeacherApplicationInput, saved: SavedApplication) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;font-weight:600;color:#0b2545">${label}</td><td style="padding:6px 12px;color:#333">${value}</td></tr>`;

  return `
    <div style="font-family:Georgia,serif;max-width:640px">
      <h2 style="color:#0b2545">New teaching application — Lighthouse Campus</h2>
      <table style="border-collapse:collapse;width:100%">
        ${row("Full name", input.fullName)}
        ${row("Email", input.email)}
        ${row("Phone", input.phone)}
        ${row("Subject", input.subject)}
        ${row("Qualification", input.qualification)}
        ${row("Experience", input.experienceYears)}
        ${row("Message", input.message || "—")}
        ${row(
          "CV",
          saved.cvUrl
            ? `<a href="${saved.cvUrl}">${input.cvFilename ?? "Download CV"}</a>`
            : "Not attached",
        )}
      </table>
      <p style="color:#777;font-size:12px">Reference: ${saved.id}</p>
    </div>`;
}

/**
 * Sends the application notification to the campus inbox.
 * Returns false when email delivery is not configured yet — the application
 * is still stored safely and visible in the backend.
 */
export async function notifyTeacherApplication(
  input: TeacherApplicationInput,
  saved: SavedApplication,
): Promise<boolean> {
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
      body: JSON.stringify({
        from,
        to: [RECIPIENT_EMAIL],
        reply_to: input.email,
        subject: `Teaching application — ${input.subject} — ${input.fullName}`,
        html: buildHtml(input, saved),
      }),
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
