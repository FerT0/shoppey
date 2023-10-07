import { Navbar } from "@/components/navbar";
import { title } from "@/components/primitives";

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <h1 className={title()}>Cart</h1>
    </div>
  );
}
