"use client";
import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { getCurrentSession } from "./connections/getSession";
import { getAllProducts } from "./connections/getAllProducts";
import UserDataContext from "./contexts/userdata-context";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sessionData, setSessionData] = useState(undefined);
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openCart, setOpenCart] = useState(false);
  const [cartTrigger, setCartTrigger] = useState(0);
  const [myProductsTrigger, setMyProductsTrigger] = useState(0);

  const fetchData = async () => {
    const responseSession = await getCurrentSession();
    const responseProducts = await getAllProducts();

    setSessionData(responseSession.data.session);
    setProductsData(responseProducts);
  };

  useEffect(() => {
    fetchData().then(async (res) => {
      setLoading(false);
    });
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Shoppey</title>
        <meta name="description" content="Shoppey | E-commerce website" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <div className={inter.className}>
              <UserDataContext.Provider
                value={{
                  sessionData,
                  setSessionData,
                  loading,
                  setLoading,
                  productsData,
                  setProductsData,
                  openCart,
                  setOpenCart,
                  cartTrigger,
                  setCartTrigger,
                  myProductsTrigger,
                  setMyProductsTrigger,
                }}
              >
                {children}
              </UserDataContext.Provider>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
