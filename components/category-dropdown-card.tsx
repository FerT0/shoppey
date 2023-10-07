import React from "react";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/react";

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
      <Card shadow="none" isHoverable isPressable>
        <CardBody>
          <p className="capitalize">{props.name}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
