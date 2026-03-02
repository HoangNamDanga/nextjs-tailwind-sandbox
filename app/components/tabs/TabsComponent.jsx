"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
const TabsComponent = ({ items }) => {
  const firstBtnRef = useRef();
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {
    // Thêm dấu ? trước .focus()
    firstBtnRef.current?.focus();
  }, []);
  return (
    <div className="bg-sky-100 flex justify-center items-center py-12">
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        <div className="bg-blue-400 p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {items.map((item, index) => (
            // Thêm key ở đây 👇
            <button
              ref={index === 0 ? firstBtnRef : null}
              className={`outline-none w-full p2 hover:bg-blue-300 rounded-xl text-center focus:ring-2 focus:bg-white focus:text-blue-600 
                ${selectedTab === index ? "focus:ring-2 focus:bg-white focus:text-blue-600" : ""}`}
              key={index}
              onClick={() => setSelectedTab(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-2 rounded-xl">
          {items.map((item, index) => (
            <div
              className={`${selectedTab === index ? "" : "hidden"}`}
              key={index}
            >
              {item.content}
            </div> // Thêm key ở đây
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
