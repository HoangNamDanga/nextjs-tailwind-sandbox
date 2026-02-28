"use client";
import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import UserAreaSelectBox from "./UserAreaSelectBox";
import LanguageSelectBox from "./LanguageSelectBox";
import { FaBars } from "react-icons/fa";
const MainHeader = () => {
  const { toggle } = useContext(MenuContext); // phần này sẽ kích hoạt context
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
      <div>Brand</div>
      <div className="flex justify-center items-center gap-3">
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
