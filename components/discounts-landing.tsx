import React from "react";
import Image from "next/image";
import furniture from "../images/furniture_discounts.png";
import books from "../images/books_discounts.png";
import clothes from "../images/clothes_discounts.png";
import school from "../images/school_discounts.png";

export default function DiscountsLanding() {
  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#333]">
            Get Up To 70% Off
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 justify-center">
            <div className="rounded-xl text-[#cb9917] bg-[#f2e4d9]">
              <div className="p-8">
                <h3 className="mt-0 text-xl mb-2 text-[#333] font-bold">
                  Save
                </h3>
                <div className="text-5xl leading-10 font-bold mb-2">
                  <span className="relative -top-4 text-3xl leading-10">$</span>
                  100
                </div>
                <p className="text-[#333] text-base leading-[160%] font-medium">
                  Explore our furniture & home furnishing range
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b-lg">
                <Image
                  src={furniture}
                  alt="furniture"
                  className="w-full align-middle ease-in duration-150 h-auto hover:scale-125"
                />
              </div>
            </div>
            <div className="rounded-xl text-[#961f1f] bg-[#f9dcdc]">
              <div className="p-8">
                <h3 className="mt-0 text-xl mb-2 text-[#333] font-bold">
                  Save
                </h3>
                <div className="text-5xl leading-10 font-bold mb-2">
                  <span className="relative -top-4 text-3xl leading-10">$</span>
                  29
                </div>
                <p className="text-[#333] text-base leading-[160%] font-medium">
                  Explore our furniture & home furnishing range
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b-lg">
                <Image
                  src={books}
                  alt="furniture"
                  className="w-full align-middle ease-in duration-150 h-auto hover:scale-125"
                />
              </div>
            </div>
            <div className="rounded-xl text-[#94623c] bg-[#f2e4d9]">
              <div className="p-8">
                <h3 className="mt-0 text-xl mb-2 text-[#333] font-bold">
                  Save
                </h3>
                <div className="text-5xl leading-10 font-bold mb-2">
                  <span className="relative -top-4 text-3xl leading-10">$</span>
                  67
                </div>
                <p className="text-[#333] text-base leading-[160%] font-medium">
                  Explore our furniture & home furnishing range
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b-lg">
                <Image
                  src={clothes}
                  alt="furniture"
                  className="w-full align-middle ease-in duration-150 h-auto hover:scale-125"
                />
              </div>
            </div>
            <div className="rounded-xl text-[#003d29] bg-[#d2f7ec]">
              <div className="p-8">
                <h3 className="mt-0 text-xl mb-2 text-[#333] font-bold">
                  Save
                </h3>
                <div className="text-5xl leading-10 font-bold mb-2">
                  <span className="relative -top-4 text-3xl leading-10">$</span>
                  59
                </div>
                <p className="text-[#333] text-base leading-[160%] font-medium">
                  Explore our furniture & home furnishing range
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b-lg">
                <Image
                  src={school}
                  alt="furniture"
                  className="w-full align-middle ease-in duration-150 h-auto hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
