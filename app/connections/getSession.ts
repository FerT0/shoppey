import { client } from "../supabase/client";

export async function getCurrentSession() {
  let data = await client.auth.getSession();
  return data;
}
