"use client";
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { getCurrentSession } from "./connections/getSession";
import UserDataContext from "./contexts/userdata-context";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
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
  const [sessionData, setSessionData] = useState<any | null>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const responseSession = await getCurrentSession();

    setSessionData(responseSession.data.session);
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
            <UserDataContext.Provider
              value={{ sessionData, setSessionData, loading, setLoading }}
            >
              {children}
            </UserDataContext.Provider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
