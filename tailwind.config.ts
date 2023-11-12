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
        "gradient-starting-purple": "#A88BEB",
        "gradient-ending-pink": "#F8CEEC",
        cranberry: "#772114",
        "cranberry-medium": "#7f2c1f",
        "cranberry-light": "#8b3a2e",
        spruce: "#25330F",
        "spruce-light": "#59752c",
        "spruce-medium": "#3f551b",
        midnight: "#042D29",
        "midnight-light": "#25776f",
        "midnight-medium": "#18615a",
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
