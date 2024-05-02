import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          "100": '#c2bfbd', // main background
          "200": "#101418", // footer & sidebar background
        }, 
        secondary:{
          "100": "#bbb7b4",//card
          "200": "#b2b0ae", //border
          "300": "#404448",//blog card date & category
        },
      },
    },
  },
  plugins: [],
};
export default config;
