"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../contexts/userdata-context";
import { getMyProducts } from "../connections/getMyProducts";

export default function MyProducts() {
  const [myProductsData, setMyProductsData] = useState([]);
  const { sessionData, setSessionData, loading, setLoading } =
    useUserDataContext();

  useEffect(() => {
    if (sessionData !== null) {
      const fetchSessionData = async () => {
        const responseMyProducts = await getMyProducts(sessionData.user.id);
        setMyProductsData(responseMyProducts);
      };
      fetchSessionData().then(() => {
        console.log(myProductsData);
      });
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <Navbar />
      <section>
        <h1>My products</h1>
        <button onClick={() => console.log(myProductsData)}>test</button>
        <ul role="list" className="divide-y divide-gray-100">
          {myProductsData.map((product) => (
            <li key={product.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={product.product_picture}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6">
                    {product.product_name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 ">
                    {product.product_description}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {product.product_price}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {product.category}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
