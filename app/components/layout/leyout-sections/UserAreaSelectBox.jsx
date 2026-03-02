"use client";

import React, { useState } from "react";

import Link from "next/link";
const actions = [
  { id: 1, label: "User Dashboard", route: "/users/dashboard" },
  { id: 2, label: "Transactions", route: "/users/transactions" },
  { id: 3, label: "Orders", route: "/users/orders" },
  { id: 4, label: "Friends", route: "/users/friends" },
  { id: 5, label: "Log out", route: "/users/logout" },
];
const UserAreaSelectBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <span className="border-2 border-blue-600 p-1 rounded-lg">
            User Area
          </span>
        </div>
        <div
          className={`flex flex-col bg-sky-100 w-48 my-2 rounded-lg ${
            // SỬA: Xóa dấu ` thừa và sửa chính tả
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-0`}
        >
          {actions.map((item) => (
            <div
              key={item.id}
              // XÓA onClick Ở ĐÂY
              className={`flex justify-start items-center p-2 hover:bg-sky-300 cursor-pointer`}
            >
              {/* GIỮ onClick Ở LINK ĐỂ ĐÓNG MENU */}
              <Link
                href={item.route}
                onClick={() => setOpen(false)}
                className="w-full"
              >
                {item.label}
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

export default UserAreaSelectBox;
