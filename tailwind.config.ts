import type { Config } from "tailwindcss";
// 1. Nhập plugin bằng cú pháp import
import tailwindScrollbar from 'tailwind-scrollbar'; 

const config: Config = {
  darkMode: 'class', // cấu hình dark theme
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
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