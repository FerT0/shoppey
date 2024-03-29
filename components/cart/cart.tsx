"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useUserDataContext } from "@/app/contexts/userdata-context";
import { getCart } from "@/app/connections/getCart";
import { removeFromCart } from "@/app/connections/removeFromCart";

export default function Cart() {
  const { sessionData, openCart, setOpenCart, cartTrigger, setCartTrigger } =
    useUserDataContext();

  const [cartData, setCartData] = useState([]);
  const [cartLoading, setCartLoading] = useState<boolean>(true);

  const fetchCartData = async () => {
    const responseCart = await getCart(sessionData.user.id);
    setCartData(responseCart);
  };

  const deleteProductFromCart = async (arg: number) => {
    await removeFromCart(arg, sessionData.user.id);
    setCartTrigger(cartTrigger + 1);
  };

  useEffect(() => {
    fetchCartData().then(async (res) => {
      setCartLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchCartData().then(async (res) => {
      setCartLoading(false);
    });
  }, [cartTrigger]);

  return (
    <>
      <Transition.Root show={openCart} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpenCart}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                              onClick={() => setOpenCart(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartData.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.product_picture}
                                      alt={product.product_description}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{product.product_name}</h3>
                                        <p className="ml-4">
                                          ${product.product_price}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.product_description}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Posted by{" "}
                                        <label className="a font-semibold">
                                          {product.posted_by_name}
                                        </label>
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-success-600 hover:text-success-500"
                                          onClick={() =>
                                            deleteProductFromCart(product.id)
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$250</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-success-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-success-800"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-success-700 hover:text-success-600 pl-1"
                              onClick={() => setOpenCart(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
