import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
