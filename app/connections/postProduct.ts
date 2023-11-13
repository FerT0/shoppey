import { client } from "../supabase/client";

export async function postProduct(
  name: string,
  description: string,
  price: number,
  category: string,
  posted_name: string,
  user_id: string,
  file: File
) {
  const storageUrl =
    "https://dcfmlfwagodvzuugxseh.supabase.co/storage/v1/object/public/pictures/";
  const fileName = "id" + Math.random().toString(16).slice(2);
  const fileUrl = storageUrl + fileName;
  const { error: storageError } = await client.storage
    .from("pictures")
    .upload(fileName, file);

  if (storageError) {
    console.log("error uploading", storageError);
    console.log(fileName);
  } else {
    const { error: productError } = await client.from("products").insert({
      product_name: name,
      product_description: description,
      product_price: price,
      category: category,
      posted_by_name: posted_name,
      posted_by: user_id,
      product_picture: fileUrl,
    });
    return productError;
  }
}
