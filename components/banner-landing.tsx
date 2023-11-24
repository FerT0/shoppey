import React from "react";
import { Button } from "@nextui-org/button";

export default function BannerLanding(): React.JSX.Element {
  return (
    <div>
      <section className="py-32 bg-[url('../images/second_background.png')] bg-[50%] bg-cover bg-no-repeat">
        <div className="flex px-10 bg-success-600 py-28 lg:ml-auto lg:mr-60 md:w-[33rem] text-white mx-auto">
          <div className="">
            <h2 className="text-5xl font-semibold mb-3">
              Get 5% Cash Back On $200
            </h2>
            <p className="mb-3">
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </p>
            <Button
              className="bg-success-600 text-white font-medium border-solid border-1 hover:bg-white hover:text-success-600 hover:border-success-600"
              radius="full"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
