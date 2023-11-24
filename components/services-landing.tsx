import React from "react";
import Image from "next/image";
import frequently_asked from "../images/frequently_asked.png";
import online_payment from "../images/online_payment.png";
import home_delivery from "../images/home_delivery.png";
import { Divider } from "@nextui-org/react";

export default function ServicesLanding() {
  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#333]">
            Services To Help You Shop
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-4 justify-center">
            <div className="rounded-xl text-[#cb9917] bg-[#f5f6f6]">
              <div className="p-8">
                <h3 className="mt-0 text-xl mb-2 text-[#333] font-bold pb-2 w-52">
                  Frequently Asked Questions
                </h3>
                <p className="text-[#333] text-base leading-[160%] font-medium">
                  Explore our furniture & home furnishing range
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b-lg">
                <Image
                  src={frequently_asked}
                  alt="furniture"
                  className="w-full align-middle ease-in duration-150 h-auto hover:scale-125"
                />
              </div>
            </div>
            <div className="rounded-xl text-[#961f1f] bg-[#f5f6f6]">
              <div className="p-8">
                <h3 className="mt-0 text-xl mb-2 text-[#333] font-bold pb-2 w-52">
                  Online Payment Process
                </h3>
                <p className="text-[#333] text-base leading-[160%] font-medium">
                  Explore our furniture & home furnishing range
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b-lg">
                <Image
                  src={online_payment}
                  alt="furniture"
                  className="w-full align-middle ease-in duration-150 h-auto hover:scale-125"
                />
              </div>
            </div>
            <div className="rounded-xl text-[#94623c] bg-[#f5f6f6]">
              <div className="p-8">
                <h3 className="mt-0 text-xl mb-2 text-[#333] font-bold pb-2 w-52">
                  Home Delivery Options
                </h3>
                <p className="text-[#333] text-base leading-[160%] font-medium">
                  Explore our furniture & home furnishing range
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b-lg">
                <Image
                  src={home_delivery}
                  alt="furniture"
                  className="w-full align-middle ease-in duration-150 h-auto hover:scale-125"
                />
              </div>
            </div>
          </div>

          <Divider className="my-20" />
        </div>
      </div>
    </section>
  );
}
