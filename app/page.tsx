import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { Navbar } from "@/components/navbar";
import CategoriesLanding from "@/components/categories-landing";
import DealsLanding from "@/components/deals-landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Get&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>anything&nbsp;</h1>
            <br />
            <h1 className={title()}>that you need.</h1>
            <h2 className={subtitle({ class: "mt-4" })}>Start shopping now.</h2>
          </div>

          <div className="flex gap-3">
            <Link
              href={"/store"}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Shop now
            </Link>
          </div>
        </section>
        <CategoriesLanding />
        <DealsLanding />
      </main>
    </>
  );
}
