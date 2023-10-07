import { client } from "../supabase/client";

export async function signInWithGoogle() {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "google",
  });
}
