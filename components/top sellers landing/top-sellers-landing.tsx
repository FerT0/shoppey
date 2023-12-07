"use client";
import React from "react";
import { useUserDataContext } from "@/app/contexts/userdata-context";
import { useDisclosure } from "@nextui-org/react";
import { addToCart } from "@/app/connections/addToCart";
import NotLoggedInModal from "../not logged in modal/not-logged-in-modal";
import { Spinner } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function TopSellersLanding() {
  const { sessionData, loading, productsData, cartTrigger, setCartTrigger } =
    useUserDataContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const addProductToCart = async (arg: number) => {
    if (sessionData === null) {
      onOpen();
    } else {
      await addToCart(sessionData.user.id, arg);
      setCartTrigger(cartTrigger + 1);
    }
  };

  return (
    <section>
      <NotLoggedInModal is={isOpen} on={onOpen} change={onOpenChange} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#333]">
            Today&apos;s top sellers
          </h2>
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
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
                {productsData.slice(7, 15).map((product) => (
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
