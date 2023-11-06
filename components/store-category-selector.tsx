"use client";
import React from "react";
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { usePathname } from "next/navigation";

interface IProps {
  name: string;
}

export default function StoreCategorySelector(props: IProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const router = useRouter();
  return (
    <Badge content="5" color="primary">
      <Button
        color="primary"
        className="capitalize"
        onClick={() =>
          router.push(
            pathname + "?" + createQueryString("category", props.name)
          )
        }
      >
        {props.name}
      </Button>
    </Badge>
  );
}
