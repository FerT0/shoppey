import { client } from "../supabase/client";

export async function removeFromCart(id: number, user: string) {
  const { data, error } = await client
    .from("cart")
    .delete()
    .match({ product_id: id, user_id: user });

  return data;
}
