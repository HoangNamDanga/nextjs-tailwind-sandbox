"use client";
import React, { createContext, useState } from "react";
export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log(open); // Kiểm tra giá trị cũ của open trên trình duyệt
    setOpen((prev) => !prev); // đối số prev, đại diện cho giá trị trước đó của open ngay tại thời điểm gọi hàm
  }; //Dùng (prev) => !prev đảm bảo React luôn lấy giá trị chính xác mới nhất để đảo ngược, tránh tình trạng giao diện bị sai lệch

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
