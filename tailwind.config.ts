import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dirty-white": "#efefef",
        primary: "#80cd32",
        secondary: "#caf2f2",
        accent: "#782fc1",
      },
      backgroundImage: {
        "hero-image": "url(/images/gym.jpg)",
      },
      fontSize: {
        "extra-large": "10rem",
      },
    },
  },
  plugins: [],
};
export default config;
