export const APPLICATION_STATUSES = [
  "new",
  "under_review",
  "shortlisted",
  "interview",
  "accepted",
  "rejected",
] as const;

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

export const STATUS_LABELS: Record<ApplicationStatus, string> = {
  new: "New",
  under_review: "Under Review",
  shortlisted: "Shortlisted",
  interview: "Interview",
  accepted: "Accepted",
  rejected: "Rejected",
};

export const SUBJECTS = [
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
] as const;

export const POSITIONS = [
  "Subject Teacher",
  "Homeroom Teacher",
  "Teaching Assistant",
  "Head of Department",
  "Coordinator",
  "Counsellor",
  "Librarian",
  "Other",
] as const;

export const CURRICULA = [
  "Cambridge",
  "Sudan National Curriculum",
  "South Sudan Curriculum",
  "Other",
] as const;

export const DOCUMENT_KINDS = [
  { kind: "cv", label: "CV / Resume", required: true, multiple: false },
  { kind: "cover_letter", label: "Cover Letter", required: false, multiple: false },
  {
    kind: "teaching_certificate",
    label: "Teaching Certificate(s)",
    required: false,
    multiple: true,
  },
  {
    kind: "academic_degree",
    label: "Academic Degree(s)",
    required: false,
    multiple: true,
  },
  { kind: "other", label: "Other Supporting Documents", required: false, multiple: true },
] as const;

export const ACCEPTED_FILE_TYPES =
  ".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/png,image/jpeg,image/webp";

export const MAX_FILE_BYTES = 10 * 1024 * 1024;

/** Short, human-quotable reference derived from the application id. */
export function applicationNumber(id: string) {
  return `LHC-${id.replace(/-/g, "").slice(0, 8).toUpperCase()}`;
}
