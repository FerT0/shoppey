"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { CartIcon, SearchIcon } from "@/components/icons";
import ProfileDropdown from "./profile-dropdown";
import { useUserDataContext } from "@/app/contexts/userdata-context";
import CategoryDropdown from "./category-dropdown";
import PhoneMenuAccordion from "./phone-menu-accordion";
import { signInWithGoogle } from "@/app/connections/signIn";
import { signOut } from "@/app/connections/signOut";
import Cart from "./cart";
import { Skeleton } from "@nextui-org/skeleton";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const { sessionData, loading, setOpenCart, productsData } =
    useUserDataContext();
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const handleRefresh = (): void => {
    window.location.href = "/";
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBlurred={false}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-success-600">SHOPPEY</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <CategoryDropdown />
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                `data-[active=true]:text-primary data-[active=true]:font-medium font-medium ${styles.navbar_option}`
              )}
              color="foreground"
              href="#"
            >
              Deals
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                `data-[active=true]:text-primary data-[active=true]:font-medium font-medium ${styles.navbar_option}`
              )}
              color="foreground"
              href="#"
            >
              What's new
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                `data-[active=true]:text-primary data-[active=true]:font-medium font-medium ${styles.navbar_option}`
              )}
              color="foreground"
              href="/store"
            >
              Shop now
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      {loading ? (
        <div className="max-w-[300px] w-full hidden md:flex items-center">
          <div className="w-full flex flex-col gap-2 mr-2 items-end">
            <Skeleton className="h-3 w-4/5 rounded-lg" />
            <Skeleton className="h-3 w-3/5 rounded-lg" />
          </div>
          <div>
            <Skeleton className="flex rounded-full w-9 h-9" />
          </div>
        </div>
      ) : (
        <NavbarContent
          className="hidden md:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          {sessionData !== null && loading === false && (
            <>
              <NavbarItem className="hidden md:flex">
                <Button
                  className="text-sm font-normal text-default-600 bg-default-100"
                  startContent={<CartIcon />}
                  variant="flat"
                  onClick={() => setOpenCart(true)}
                >
                  Cart
                </Button>
              </NavbarItem>
              <Cart />
            </>
          )}
          <NavbarItem>
            <ProfileDropdown />
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {sessionData !== null && (
            <>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  Shop now
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  Deals
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  What's new
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  Cart
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  My products
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <PhoneMenuAccordion />
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  size="lg"
                  color="danger"
                  onClick={() => {
                    signOut().then(() => handleRefresh());
                  }}
                >
                  Sign Out
                </Link>
              </NavbarMenuItem>
            </>
          )}

          {sessionData === null && (
            <>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  Shop now
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  Deals
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link size="lg" href="/store" color="foreground">
                  What's new
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <PhoneMenuAccordion />
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  size="lg"
                  color="primary"
                  onClick={() => {
                    signInWithGoogle();
                  }}
                >
                  Sign In
                </Link>
              </NavbarMenuItem>
            </>
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
