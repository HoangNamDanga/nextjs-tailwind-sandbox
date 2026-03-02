"use client";

import MainHeader from "../layout/leyout-sections/MainHeader";
import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import MainSidebar from "../layout/leyout-sections/MainSidebar";
const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);
  return (
    <div className="bg-green-200 min-h-screen">
      <MainSidebar />
      <div className={`${open ? "max-lg:blur-xl" : "blur-0"}`}>
        <MainHeader />
        <main className="lg:ml-[280px]">{children}</main>
      </div>
    </div>
  );
};
//Nội dung của trang này đc truyền vào children sau đó truyền qua trang layout hoặc trang nào tùy thích

export default MainLayout;
