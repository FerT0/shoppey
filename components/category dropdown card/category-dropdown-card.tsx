import React from "react";
import Link from "next/link";

import { Button } from "@nextui-org/button";

interface IProps {
  name: string;
}

export default function CategoryDropdownCard(props: IProps) {
  return (
    <Link
      href={{
        pathname: `/store`,
        query: { category: `${props.name}` },
      }}
    >
      <Button className="capitalize w-full bg-white text-black hover:border-[#c5c5c5] border-1 border-solid border-transparent py-4">
        {props.name}
      </Button>
    </Link>
  );
}
