import React from "react";

const HorizontalScrollbar = ({ children, scrollbar = true }) => {
  return (
    <div
      className={`flex overflow-x-auto items-center space-x-2 p-4 border-gray-300 border-2 my-4 ${
        scrollbar
          ? "scrollbar-thin scrollbar scrollbar-thumb-blue-500 scrollbar-track-blue-200"
          : "scrollbar-none"
      }`}
    >
      {children}
    </div>
  );
};
//Tạo scrollball
export default HorizontalScrollbar;
