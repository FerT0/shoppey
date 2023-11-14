import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        clamp: "clamp(15rem, 17vw, 30rem)",
      },
      height: {
        clamp: "clamp(15rem, 17vw, 30rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
