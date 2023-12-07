"use client";
import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../contexts/userdata-context";
import { getMyProducts } from "../connections/getMyProducts";
import { Spinner } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon } from "@/components/icons/icons";
import { deleteProduct } from "../connections/deleteProduct";

export default function MyProducts() {
  const [myProductsData, setMyProductsData] = useState([]);
  const { sessionData, loading, myProductsTrigger, setMyProductsTrigger } =
    useUserDataContext();

  const deleteMyProduct = async (productID: number, productPicture: string) => {
    await deleteProduct(productID, sessionData.user.id, productPicture);
    setMyProductsTrigger(myProductsTrigger + 1);
  };

  useEffect(() => {
    if (loading === false) {
      const fetchMyProducts = async () => {
        try {
          const responseMyProducts = await getMyProducts(sessionData.user.id);
          setMyProductsData(responseMyProducts);
        } catch {
          window.location.href = "/";
        }
      };
      fetchMyProducts();
    }
  }, [loading]);

  useEffect(() => {
    if (loading === false) {
      const fetchMyProducts = async () => {
        try {
          const responseMyProducts = await getMyProducts(sessionData.user.id);
          setMyProductsData(responseMyProducts);
        } catch {
          window.location.href = "/";
        }
      };
      fetchMyProducts();
    }
  }, [myProductsTrigger]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-[#ffe6cc] gap-0 md:gap-36 p-8 h-96">
        <div className="flex flex-col">
          <h2 className="text-6xl capitalize m-0 text-[#333] font-bold">
            Get 5% Cash Back
          </h2>
          <p className="text-2xl font-medium text-[#333] mt-2">
            on Shoppey.com
          </p>
        </div>
      </div>
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        <section className="gap-4 py-8 md:py-10">
          {loading ? (
            <Spinner
              className="mt-6 flex justify-center h-[40vh]"
              size="lg"
              classNames={{
                circle1: "border-b-success-600",
                circle2: "border-b-success-600",
              }}
            />
          ) : (
            <>
              <h2 className="text-2xl font-bold tracking-tight text-[#333] mb-6">
                My products
              </h2>
              <div className="flex flex-col items-center justify-center">
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>CATEGORY</TableColumn>
                    <TableColumn>PRICE</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                  <TableBody items={myProductsData}>
                    {myProductsData.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <User
                            avatarProps={{
                              radius: "lg",
                              src: product.product_picture,
                            }}
                            description={product.product_name}
                            name={product.product_name}
                            classNames={{
                              name: "overflow-hidden text-ellipsis whitespace-nowrap block w-80",
                              description:
                                "overflow-hidden text-ellipsis whitespace-nowrap block w-72",
                            }}
                          >
                            {product.product_name}
                          </User>
                        </TableCell>
                        <TableCell className="capitalize">
                          {product.category}
                        </TableCell>
                        <TableCell>${product.product_price}</TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip content="Edit product">
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete product">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon
                                  onClick={() =>
                                    deleteMyProduct(
                                      product.id,
                                      product.product_picture
                                    )
                                  }
                                />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
