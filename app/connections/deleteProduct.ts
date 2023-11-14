import { client } from "../supabase/client";

export async function deleteProduct(id: number, user: string, picture) {
  const url = picture.split("/").pop();

  const { error } = await client.from("cart").delete().eq("product_id", id);

  if (error) {
    console.log("error deleting", error);
  } else {
    const { error: pictureError } = await client.storage
      .from("pictures")
      .remove(url);

    if (pictureError) {
      console.log("error deleting picture", pictureError);
    } else {
      const { error: productError } = await client
        .from("products")
        .delete()
        .match({ id: id, posted_by: user });
      return productError;
    }
  }
}
