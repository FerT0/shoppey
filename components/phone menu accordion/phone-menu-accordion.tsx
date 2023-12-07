import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link as Item } from "@nextui-org/link";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function PhoneMenuAccordion() {
  return (
    <Accordion className="-ml-2 -mt-4">
      <AccordionItem key="1" aria-label="Category" title="Category">
        <div className="flex flex-col gap-2">
          {siteConfig.categories.map((category) => (
            <div key={category.name}>
              <Link
                href={{
                  pathname: `/store`,
                  query: { category: `${category.name}` },
                }}
              >
                <Item size="lg" color="foreground" className="capitalize">
                  {category.name}
                </Item>
              </Link>
            </div>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}
