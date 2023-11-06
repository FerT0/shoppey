import React from "react";
import Image from "next/image";
import furniture from "../images/furniture.png";
import bag from "../images/bag.png";
import books from "../images/books.png";
import tech from "../images/tech.png";
import sneakers from "../images/sneakers.png";
import travel from "../images/travel.png";
import Link from "next/link";
export default function CategoriesLanding() {
  return (
    <>
      <section>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#333]">
              Shop Our Top Categories
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-4 justify-center">
              <Link
                href={{
                  pathname: `/store`,
                  query: { category: `furniture` },
                }}
              >
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
                    <Image
                      src={furniture}
                      alt="furniture"
                      className="transition-all ease-in hover:scale-125 w-full"
                    />
                    <h3 className="absolute flex justify-center top-2 right-auto bottom-auto z-10 w-full text-white font-semibold text-center text-6xl sm:text-3xl lg:text-xl">
                      Furniture
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700"></h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={{
                  pathname: `/store`,
                  query: { category: `handbags` },
                }}
              >
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
                    <Image
                      src={bag}
                      alt="bag"
                      className="transition-all ease-in hover:scale-125 w-full"
                    />
                    <h3 className="absolute flex justify-center top-2 right-auto bottom-auto z-10 w-full text-white font-semibold text-center text-6xl sm:text-3xl lg:text-xl">
                      Hand Bags
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700"></h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={{
                  pathname: `/store`,
                  query: { category: `books` },
                }}
              >
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
                    <Image
                      src={books}
                      alt="books"
                      className="transition-all ease-in hover:scale-125 w-full"
                    />
                    <h3 className="absolute flex justify-center top-2 right-auto bottom-auto z-10 w-full text-white font-semibold text-center text-6xl sm:text-3xl lg:text-xl">
                      Books
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700"></h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={{
                  pathname: `/store`,
                  query: { category: `technology` },
                }}
              >
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
                    <Image
                      src={tech}
                      alt="tech"
                      className="transition-all ease-in hover:scale-125 w-full"
                    />
                    <h3 className="absolute flex justify-center top-2 right-auto bottom-auto z-10 w-full text-white font-semibold text-center text-6xl sm:text-3xl lg:text-xl">
                      Tech
                    </h3>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700"></h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={{
                  pathname: `/store`,
                  query: { category: `shoes` },
                }}
              >
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
                    <Image
                      src={sneakers}
                      alt="shoes"
                      className="transition-all ease-in hover:scale-125 w-full"
                    />
                    <h3 className="absolute flex justify-center top-2 right-auto bottom-auto z-10 w-full text-white font-semibold text-center text-6xl sm:text-3xl lg:text-xl">
                      Shoes
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700"></h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={{
                  pathname: `/store`,
                  query: { category: `travel` },
                }}
              >
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
                    <Image
                      src={travel}
                      alt="travel"
                      className="transition-all ease-in hover:scale-125 w-full"
                    />
                    <h3 className="absolute flex justify-center top-2 right-auto bottom-auto z-10 w-full text-white font-semibold text-center text-6xl sm:text-3xl lg:text-xl">
                      Travel
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700"></h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
