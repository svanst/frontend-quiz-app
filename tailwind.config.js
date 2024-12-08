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
    },
    fontFamily: {
      sans: ["Rubik", ...fontFamily.sans],
    },
  },
};
