import { client } from "../supabase/client";

export async function getMyProducts(id: string) {
  const { data, error } = await client
    .from("products")
    .select()
    .eq("posted_by", id);
  return data;
}
