import React from "react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";

import Link from "next/link";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { ChevronDown } from "./icons";
import CategoryDropdownCard from "./category-dropdown-card";

export default function CategoryDropdown() {
  const categories = [
    { name: "furniture" },
    { name: "handbags" },
    { name: "shoes" },
    { name: "headphones" },
    { name: "technology" },
    { name: "books" },
  ];
  return (
    <>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <a
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer flex gap-2"
            )}
          >
            Category
            <ChevronDown className="mt-1" />
          </a>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <div className="space-y-1">
              <h4 className="text-medium font-medium">Popular Categories</h4>
            </div>
            <Divider className="my-4" />
            <div className="items-center text-small grid grid-rows-3 grid-cols-2">
              {categories.map((category) => (
                <div key={category.name}>
                  <CategoryDropdownCard name={category.name} />
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
