/** Tiny client-side label; real store mode comes from /api/admin/status. */
export function usingClientHint() {
  return "Storage follows your env: Supabase when keys are set, otherwise local .data/db.json.";
}
