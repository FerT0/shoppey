"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { useSearchParams } from "next/navigation";
import { getAllProducts } from "../connections/getAllProducts";
import { useState, useEffect } from "react";
import { getProductsByCategory } from "../connections/getProductsByCategory";
import { siteConfig } from "@/config/site";
import StoreCategorySelector from "@/components/store-category-selector";
import { Spinner } from "@nextui-org/react";

export default function Store() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [productsData, setProductsData] = useState([]);
  const [productsLoading, setProductsLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    const responseProducts = await getAllProducts();

    setProductsData(responseProducts);
  };

  const fetchProductsByCategory = async (arg: string) => {
    const responseCategory = await getProductsByCategory(arg);
    setProductsData(responseCategory);
  };

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (category) {
      setProductsLoading(true);
      fetchProductsByCategory(category).then(async (res) => {
        setProductsLoading(false);
      });
    }
  }, [category]);

  return (
    <>
      <Navbar />
      <section>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
            <div className="mt-4 flex gap-4">
              {siteConfig.categories.map((category) => (
                <div key={category.name}>
                  <StoreCategorySelector name={category.name} />
                </div>
              ))}
            </div>

            {productsLoading ? (
              <Spinner
                className="mt-6 flex justify-center h-[40vh]"
                size="lg"
              />
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {productsData.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.product_picture}
                        alt={product.product_name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.product_name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.product_description}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.product_price}
                      </p>
                    </div>
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
