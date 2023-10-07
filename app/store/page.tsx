"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { useSearchParams } from "next/navigation";

export default function Store() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Navbar />
      <section>
        <h1>{category ? category : "No category"}</h1>
      </section>
    </>
  );
}
