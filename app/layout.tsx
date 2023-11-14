"use client";
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
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

export const metadata: Metadata = {
  title: {
    default: "Shoppey",
    template: "Shoppey",
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sessionData, setSessionData] = useState(null);
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openCart, setOpenCart] = useState(false);
  const [cartTrigger, setCartTrigger] = useState(0);

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
      <head />
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
