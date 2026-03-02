import type { Config } from "tailwindcss";
// 1. Nhập plugin bằng cú pháp import
import tailwindScrollbar from 'tailwind-scrollbar'; 

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  // 2. Sử dụng plugin đã nhập
  plugins: [
    tailwindScrollbar,
  ],
};
export default config;