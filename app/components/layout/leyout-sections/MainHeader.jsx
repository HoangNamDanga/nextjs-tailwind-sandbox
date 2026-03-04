"use client";
import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "@/context/MenuContext";
import UserAreaSelectBox from "../leyout-sections/UserAreaSelectBox";
import LanguageSelectBox from "../leyout-sections/LanguageSelectBox";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
const MainHeader = () => {
  // SỬA Ở ĐÂY: Khởi tạo state bằng một hàm (anonymous function)
  const [theme, setTheme] = useState(() => {
    // Kiểm tra xem có đang chạy ở trình duyệt không
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Giá trị mặc định khi ở Server
  });

  const themeSwitchHandler = (newTheme) => {
    if (newTheme === "dark" || newTheme === "light") {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  // Giữ nguyên useEffect này để cập nhật class cho body
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const { toggle } = useContext(MenuContext); // phần này sẽ kích hoạt context
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white flex justify-between items-center px-4 h-12 mb-4 transition-colors duration-300">
      <div>Brand</div>
      <div className="flex justify-center items-center gap-3">
        {theme === "light" ? (
          <FaMoon
            className="cursor-pointer"
            onClick={() => themeSwitchHandler("dark")}
          />
        ) : (
          <FaSun
            className="cursor-pointer"
            onClick={() => themeSwitchHandler("light")}
          />
        )}

        <div>
          <LanguageSelectBox></LanguageSelectBox>
        </div>
        <div onClick={toggle} className="lg:hidden">
          <FaBars className="cursor-pointer" />
        </div>
        <div>
          <UserAreaSelectBox></UserAreaSelectBox>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
