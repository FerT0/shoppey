"use client";
import React, { useState } from "react";
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { CloseCategory } from "../icons/icons";

interface IProps {
  name: string;
}

export default function StoreCategorySelector(props: IProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams.get("category");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const router = useRouter();

  const handleCategory = async () => {
    await timeout(100);
    router.push(pathname + "?" + createQueryString("category", props.name));
  };

  return (
    <>
      {props.name === category ? (
        <Badge
          content={<CloseCategory />}
          isOneChar
          color="danger"
          size="md"
          onClick={() => router.push(pathname)}
          className="cursor-pointer"
          variant="shadow"
        >
          <Button
            color="primary"
            className="capitalize bg-white text-black border-[#c5c5c5] border-1 border-solid"
          >
            {props.name}
          </Button>
        </Badge>
      ) : (
        <Button
          color="primary"
          className="capitalize bg-white text-black border-[#c5c5c5] border-1 border-solid"
          onClick={() => handleCategory()}
        >
          {props.name}
        </Button>
      )}
    </>
  );
}
