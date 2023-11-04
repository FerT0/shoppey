"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useUserDataContext } from "@/app/contexts/userdata-context";
import { Card, Skeleton } from "@nextui-org/react";
import DealsLandingCard from "./deals-landing-card";

export default function DealsLanding() {
  const {
    sessionData,
    setSessionData,
    loading,
    setLoading,
    productsData,
    setProductsData,
  } = useUserDataContext();
  return (
    <section className="">
      <div className="">
        <div className="">
          <h3>Todays Best Deals For You!</h3>
        </div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <p>Not loading</p>
            <button onClick={() => console.log(productsData)}>test</button>
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
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
              {productsData.slice(0, 6).map((data, index) => (
                <SwiperSlide key={index}>
                  <DealsLandingCard
                    key={data.id}
                    session={sessionData}
                    name={data.product_name}
                    description={data.product_description}
                    price={data.product_price}
                    img={data.product_picture}
                    posted_by_name={data.posted_by_name}
                    posted_by_id={data.posted_by}
                    product_id={data.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </section>
  );
}
