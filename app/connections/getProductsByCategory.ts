import { client } from "../supabase/client";

export async function getProductsByCategory(category: string) {
  const { data, error } = await client
    .from("products")
    .select()
    .eq("category", category);
  return data;
}
