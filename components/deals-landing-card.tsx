import React from "react";
import Image from "next/image";
import star from "../images/star.svg";

export default function DealsLandingCard(props) {
  return (
    <>
      <div className="w-clamp">
        <div className="a rleative overflow-hidden rounded-xl bg-[#f5f6f6] text-center w-clamp h-clamp">
          <img
            src={props.img}
            alt="product image"
            data-fill="true"
            className="ease-in duration-150 h-clamp"
          />
        </div>
        <div>
          <div className="flex justify-between h-[25%] w-full">
            <h3 className="text-[#231f1e] text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              {props.name}
            </h3>
            <div className="flex">
              <h3>$</h3>
              <h3 id="text-[#231f1e] text-lg font-semibold">{props.price}</h3>
              <h3>.00</h3>
            </div>
          </div>
          <p>
            Posted by <b>{props.posted_by_name}</b>
          </p>
          <p className="a h-4 overflow-hidden text-ellipsis whitespace-nowrap">
            {props.description}
          </p>
          <div className="flex gap-[0.1rem] mt-2">
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <p>(121)</p>
          </div>
          <button className="">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
