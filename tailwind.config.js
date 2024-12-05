/** @type {import('tailwindcss').Config} */

import { join } from "path";

export default {
  content: [join(__dirname, "src/**/*.{html,js,jsx,ts,tsx}")],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
};
