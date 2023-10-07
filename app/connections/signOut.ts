import { client } from "../supabase/client";

export async function signOut() {
  const signOut = await client.auth.signOut();
}
