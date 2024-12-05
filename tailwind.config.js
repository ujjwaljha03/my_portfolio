/** @type {import('tailwindcss').Config} */

import path from "path";
import { fileURLToPath } from "url";
import forms from "@tailwindcss/forms";

// Manually define __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  content: [path.join(__dirname, "src/**/*.{html,js,jsx,ts,tsx}")],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [forms],
};
