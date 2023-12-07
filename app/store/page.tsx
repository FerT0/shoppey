"use client";
import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { useSearchParams } from "next/navigation";
import { getAllProducts } from "../connections/getAllProducts";
import { useState, useEffect } from "react";
import { getProductsByCategory } from "../connections/getProductsByCategory";
import { siteConfig } from "@/config/site";
import StoreCategorySelector from "@/components/store category selector/store-category-selector";
import { Spinner } from "@nextui-org/react";
import { useCallback } from "react";
import { Button } from "@nextui-org/react";
import { addToCart } from "../connections/addToCart";
import { useUserDataContext } from "../contexts/userdata-context";
import NotLoggedInModal from "@/components/not logged in modal/not-logged-in-modal";
import { useDisclosure } from "@nextui-org/react";
import NewProduct from "@/components/new product/new-product";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import store_img from "../../images/store_img.png";
import Image from "next/image";

export default function Store() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();
  const pathname = usePathname();

  const [productsData, setProductsData] = useState([]);
  const [productsLoading, setProductsLoading] = useState<boolean>(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { sessionData, cartTrigger, setCartTrigger } = useUserDataContext();

  const fetchProducts = async () => {
    const responseProducts = await getAllProducts();

    setProductsData(responseProducts);
  };

  const fetchProductsByCategory = async (arg: string) => {
    const responseCategory = await getProductsByCategory(arg);
    setProductsData(responseCategory);
  };

  const addProductToCart = async (arg: number) => {
    if (sessionData === null) {
      onOpen();
    } else {
      await addToCart(sessionData.user.id, arg);
      setCartTrigger(cartTrigger + 1);
    }
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleProducts = () => {
    if (category) {
      setProductsLoading(true);
      fetchProductsByCategory(category).then(async (res) => {
        setProductsLoading(false);
      });
    } else {
      fetchProducts().then(async (res) => {
        setProductsLoading(false);
      });
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  useEffect(() => {
    handleProducts();
  }, [category]);

  const handleCategory = async (arg: string) => {
    router.push(pathname + "?" + createQueryString("category", arg));
  };

  return (
    <>
      <Navbar />
      <section>
        <NotLoggedInModal is={isOpen} on={onOpen} change={onOpenChange} />
        <div className="flex items-center justify-center bg-[#ffe6cc] gap-0 md:gap-36 p-8 h-96">
          <div className="flex flex-col">
            <h2 className="text-6xl capitalize m-0 text-[#333] font-bold">
              Get 5% Cash Back
            </h2>
            <p className="text-2xl font-medium text-[#333] mt-2">
              on Shoppey.com
            </p>
          </div>
          <div>
            <Image
              src={store_img}
              alt="store img"
              className="hidden md:flex"
            ></Image>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-[#333]">
              Todays Best Deals For You!
            </h2>
            <div className="flex md:hidden mt-4">
              <Select
                label="Category"
                className="max-w-xs"
                placeholder="travel"
                classNames={{
                  value: "capitalize",
                }}
              >
                {siteConfig.categories.map((category) => (
                  <SelectItem
                    key={category.name}
                    className="capitalize"
                    onClick={() => handleCategory(category.name)}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 hidden md:flex gap-4">
              {siteConfig.categories.map((category) => (
                <div key={category.name}>
                  <StoreCategorySelector name={category.name} />
                </div>
              ))}
              <div className="hidden lg:flex ml-auto">
                <NewProduct />
              </div>
            </div>
            <div className="flex lg:hidden mt-4">
              <NewProduct />
            </div>

            {productsLoading ? (
              <Spinner
                className="mt-6 flex justify-center h-[40vh]"
                size="lg"
                classNames={{
                  circle1: "border-b-success-600",
                  circle2: "border-b-success-600",
                }}
              />
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
                {productsData.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[#f5f6f6] lg:aspect-none h-80 flex justify-center items-center">
                      <img
                        src={product.product_picture}
                        alt={product.product_name}
                        className="object-cover group-hover:scale-125 ease-in duration-150 lg:aspect-none h-80"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-[#231f1e] overflow-hidden text-ellipsis whitespace-nowrap block w-60">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.product_name}
                        </h3>
                        <p className="text-sm font-medium text-[#231f1e]">
                          ${product.product_price}.00
                        </p>
                        <p className="mt-1 text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap block w-64">
                          {product.product_description}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="mt-2 bg-transparent text-black border-solid border-1 hover:bg-success-600 hover:text-white hover:border-success-600"
                      onClick={() => addProductToCart(product.id)}
                    >
                      Add to cart
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
