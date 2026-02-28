"use client";

import React, { useState } from "react";
import "flag-icons/css/flag-icons.min.css";
import { BsGlobeAmericas } from "react-icons/bs";

import Link from "next/link";
const languages = [
  { id: 1, flag: "fi fi-us", route: "/en" },
  { id: 2, flag: "fi fi-vn", route: "/vn" },
];
const LanguageSelectBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <span className="text-2xl">
            <BsGlobeAmericas></BsGlobeAmericas>
          </span>
        </div>
        <div
          className={`flex flex-col bg-orange-100 w-48 my-2 rounded-lg ${
            // SỬA: Xóa dấu ` thừa và sửa chính tả
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-0`}
        >
          {languages.map((item) => (
            <div
              key={item.id}
              // XÓA onClick Ở ĐÂY
              className={`flex justify-start items-center p-2 hover:bg-sky-300 cursor-pointer`}
            >
              {/* GIỮ onClick Ở LINK ĐỂ ĐÓNG MENU */}
              <Link
                href={item.route}
                onClick={() => setOpen(false)}
                className="w-full flex items-center gap-2"
              >
                <span className={`fi ${item.flag}`}></span>
                {item.route === "/en" ? "English" : "Tiếng Việt"}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-sky-100 fixed inset-0 opacity-50 z-0 ${open ? "block" : "hidden"}`}
      ></div>
    </>
  );
};

export default LanguageSelectBox;
