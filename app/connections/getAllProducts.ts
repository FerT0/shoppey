import { client } from "../supabase/client";

export async function getAllProducts() {
  const { data, error } = await client.from("products").select();
  return data;
}
