import { client } from "../supabase/client";

export async function getCart(id: string) {
  const { data: cartItems, error: cartError } = await client
    .from("cart")
    .select()
    .eq("user_id", id);
  const productIds = cartItems.map((item) => item.product_id);

  const { data, error } = await client
    .from("products")
    .select("*")
    .in("id", productIds);
  return data;
}
