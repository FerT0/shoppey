"use client";
import React from "react";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { Skeleton } from "@nextui-org/skeleton";
import { CartIcon } from "../icons/icons";
import { signInWithGoogle } from "@/app/connections/signIn";
import { signOut } from "@/app/connections/signOut";
import { useUserDataContext } from "@/app/contexts/userdata-context";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const router = useRouter();
  const handleRefresh = (): void => {
    window.location.href = "/";
  };

  const { sessionData, setSessionData, loading, setLoading } =
    useUserDataContext();

  return (
    <>
      {sessionData !== null && loading === true && (
        <Skeleton className="flex rounded-full w-9 h-9 justify-center items-center" />
      )}
      {sessionData !== null && loading === false && (
        <Dropdown
          showArrow
          radius="sm"
          classNames={{
            base: "p-0 border-small border-divider bg-background",
            arrow: "bg-default-200",
          }}
          closeOnSelect={false}
        >
          <DropdownTrigger>
            <Avatar
              isBordered
              src={sessionData.user.identities[0].identity_data.avatar_url}
              size="sm"
              className="hover:cursor-pointer"
              classNames={{
                base: "bg-success-600 ring-success-600",
              }}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Custom item styles"
            disabledKeys={["profile"]}
            className="p-3"
            itemClasses={{
              base: [
                "rounded-md",
                "text-default-500",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "data-[hover=true]:bg-default-100",
                "dark:data-[hover=true]:bg-default-50",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[focus-visible=true]:ring-default-500",
              ],
            }}
          >
            <DropdownSection aria-label="Profile & Actions" showDivider>
              <DropdownItem
                isReadOnly
                key="profile"
                className="h-14 gap-2 opacity-100"
              >
                <User
                  name={sessionData.user.identities[0].identity_data.full_name
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")}
                  description={
                    sessionData.user.identities[0].identity_data.email
                  }
                  classNames={{
                    name: "text-default-600",
                    description: "text-default-500",
                  }}
                  avatarProps={{
                    size: "sm",
                    src: sessionData.user.identities[0].identity_data
                      .avatar_url,
                  }}
                />
              </DropdownItem>
              <DropdownItem
                onClick={() => router.push("/store")}
                key="dashboard"
              >
                Shop now
              </DropdownItem>

              <DropdownItem
                key="new_project"
                endContent={<CartIcon className="text-large" />}
                onClick={() => router.push("/myproducts")}
              >
                My Products
              </DropdownItem>
            </DropdownSection>

            <DropdownSection aria-label="Help & Feedback">
              <DropdownItem
                key="logout"
                onClick={() => {
                  signOut()
                    .then(() => handleRefresh())
                    .finally(() => setSessionData(null));
                }}
              >
                Sign Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      )}
      {sessionData === null && (
        <Dropdown
          showArrow
          radius="sm"
          classNames={{
            base: "p-0 border-small border-divider bg-background",
            arrow: "bg-default-200",
          }}
        >
          <DropdownTrigger>
            <Avatar
              src=""
              size="sm"
              className="hover:cursor-pointer"
              isBordered
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Custom item styles"
            disabledKeys={["profile"]}
            className="p-3"
            itemClasses={{
              base: [
                "rounded-md",
                "text-default-500",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "data-[hover=true]:bg-default-100",
                "dark:data-[hover=true]:bg-default-50",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[focus-visible=true]:ring-default-500",
              ],
            }}
          >
            <DropdownSection aria-label="Profile & Actions">
              <DropdownItem
                key="signin"
                description="Sign in with Google"
                onClick={() => {
                  signInWithGoogle();
                }}
              >
                <p className="font-medium">Sign In</p>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
}
