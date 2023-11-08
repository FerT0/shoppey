import { client } from "../supabase/client";

export async function addToCart(user_id: string, product_id: number) {
  const { data } = await client
    .from("cart")
    .select("product_id, user_id, quantity");
  const userCart = data.filter(
    (x) => x.product_id === product_id && x.user_id === user_id
  );

  if (userCart.length > 0) {
    console.log("not empty");
  } else {
    const { error } = await client.from("cart").insert({ user_id, product_id });
  }

  return data;
}
