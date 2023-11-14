import { Link } from "@nextui-org/link";
import { Navbar } from "@/components/navbar";
import CategoriesLanding from "@/components/categories-landing";
import DealsLanding from "@/components/deals-landing";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-6 bg-[url('../images/background.png')] py-60 bg-[50%] bg-cover bg-no-repeat">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="font-bold text-4xl lg:text-6xl text-success-700 text-center">
            Get everything
          </h1>
          <h1 className="font-bold text-4xl lg:text-6xl text-success-700 text-center">
            you need.
          </h1>
          <h2 className="text-[#333] text-lg lg:text-xl my-4">
            Start shopping now.
          </h2>

          <Link href={"/store"}>
            <Button
              className="bg-success-600 text-white font-medium"
              radius="full"
            >
              Shop now
            </Button>
          </Link>
        </div>
      </section>
      <CategoriesLanding />
      <DealsLanding />
      <CategoriesLanding />
    </>
  );
}
