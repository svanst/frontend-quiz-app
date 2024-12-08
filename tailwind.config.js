import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(277, 91%, 56%)",
        success: "hsl(151, 70%, 50%)",
        danger: "hsl(0, 82%, 63%)",
        gray: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(220, 38%, 97%)",
          300: "hsl(216, 47%, 78%)",
          400: "hsl(219, 13%, 44%)",
          500: "hsl(215, 27%, 32%)",
          600: "hsl(216, 25%, 25%)",
        },
      },
      // fontSize: {
      //   xs: ["0.75rem", "150%"], // 12px
      //   sm: ["0.875rem", "150%"], // 14px
      //   base: ["1.125rem", "150%"], // 18px
      //   lg: ["1.75rem", "150%"], // 28px
      //   xl: ["2.25rem", "100%"], // 36px
      //   "2.5xl": ["2.5rem", "100%"], // 40px
      //   "2xl": ["4rem", "100%"], // 64px
      //   "4xl": ["5.5rem", "100%"], // 88px
      //   "5xl": ["9rem", "100%"], // 144px
      // },
    },
    fontFamily: {
      sans: ["Rubik", ...fontFamily.sans],
    },
  },
  plugins: [],
};
