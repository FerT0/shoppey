"use client";
import { createContext, useContext } from "react";

const UserDataContext = createContext(null);
export default UserDataContext;

export function useUserDataContext() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error(
      "useUserDataContext must be used within a UserDataContextProvider"
    );
  }
  return context;
}
