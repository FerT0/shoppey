"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useUserDataContext } from "@/app/contexts/userdata-context";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { addToCart } from "@/app/connections/addToCart";
import { useDisclosure } from "@nextui-org/react";
import NotLoggedInModal from "./not-logged-in-modal";

export default function WeeklyPopularLanding() {
  const { sessionData, loading, productsData, cartTrigger, setCartTrigger } =
    useUserDataContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const addProductToCart = async (arg: number) => {
    if (sessionData === null) {
      onOpen();
    } else {
      await addToCart(sessionData.user.id, arg);
      setCartTrigger(cartTrigger + 1);
    }
  };
  return (
    <section>
      <NotLoggedInModal is={isOpen} on={onOpen} change={onOpenChange} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#333]">
            Weekly Popular Products
          </h2>

          {loading ? (
            <Spinner className="mt-6 flex justify-center h-[40vh]" size="lg" />
          ) : (
            <>
              <Swiper
                modules={[Scrollbar]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                className="my-6 pb-6"
                scrollbar={{ draggable: true }}
                breakpoints={{
                  1090: {
                    slidesPerView: 4,
                  },
                  820: {
                    slidesPerView: 3,
                  },
                  560: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5">
                  {productsData.slice(6, 12).map((product, index) => (
                    <SwiperSlide key={index}>
                      <div key={product.id} className="group relative pb-6">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[#f5f6f6] lg:aspect-none lg:h-80 group">
                          <img
                            src={product.product_picture}
                            alt={product.product_name}
                            className="h-full w-full object-cover object-center  lg:h-full lg:w-full group-hover:scale-125 ease-in duration-150"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[#231f1e] overflow-hidden text-ellipsis whitespace-nowrap block w-60">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.product_name}
                            </h3>
                            <p className="text-sm font-medium text-[#231f1e]">
                              ${product.product_price}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap block w-64">
                              {product.product_description}
                            </p>
                          </div>
                        </div>
                        <Button
                          color="primary"
                          className="mt-2 bg-transparent text-black border-solid border-1 hover:bg-success-600 hover:text-white hover:border-success-600"
                          onClick={() => addProductToCart(product.id)}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
