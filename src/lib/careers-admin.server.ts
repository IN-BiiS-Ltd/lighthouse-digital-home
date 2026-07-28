// Server-only admin helpers for the recruitment dashboard.
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

type Client = SupabaseClient<Database>;

export async function assertAdmin(supabase: Client, userId: string) {
  const { data, error } = await supabase.rpc("has_role", {
    _user_id: userId,
    _role: "admin",
  });
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden");
}

export async function fetchApplications(
  supabase: Client,
  filters: { search?: string; subject?: string; status?: string },
) {
  let query = supabase
    .from("teacher_applications")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(300);

  if (filters.subject) query = query.eq("subject", filters.subject);
  if (filters.status) query = query.eq("status", filters.status as never);
  if (filters.search) {
    const term = filters.search.replace(/[%,()]/g, " ").trim();
    if (term) {
      query = query.or(
        `full_name.ilike.%${term}%,email.ilike.%${term}%,subject.ilike.%${term}%,position_applied_for.ilike.%${term}%`,
      );
    }
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  const ids = (data ?? []).map((a) => a.id);
  let docs: Array<{
    id: string;
    application_id: string;
    kind: string;
    file_name: string;
    file_path: string;
  }> = [];

  if (ids.length) {
    const { data: docData, error: docError } = await supabase
      .from("application_documents")
      .select("id, application_id, kind, file_name, file_path")
      .in("application_id", ids);
    if (docError) throw new Error(docError.message);
    docs = docData ?? [];
  }

  return (data ?? []).map((application) => ({
    ...application,
    documents: docs.filter((d) => d.application_id === application.id),
  }));
}

export async function setApplicationStatus(
  supabase: Client,
  id: string,
  status: string,
) {
  const { error } = await supabase
    .from("teacher_applications")
    .update({ status: status as never })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true as const };
}
