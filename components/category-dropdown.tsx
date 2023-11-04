import React from "react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/react";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

import { ChevronDown } from "./icons";
import CategoryDropdownCard from "./category-dropdown-card";

export default function CategoryDropdown() {
  return (
    <>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <a
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer flex gap-2 font-medium"
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
              {siteConfig.categories.map((category) => (
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
