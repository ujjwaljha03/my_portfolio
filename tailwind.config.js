/** @type {import('tailwindcss').Config} */

import { join } from "path";
import forms from "@tailwindcss/forms";

export default {
  content: [join(__dirname, "src/**/*.{html,js,jsx,ts,tsx}")],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [forms],
};
