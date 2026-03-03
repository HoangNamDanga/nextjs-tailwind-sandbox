"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

// 1. CHỈ import Swiper và SwiperSlide từ 'swiper/react'
import { Swiper, SwiperSlide } from "swiper/react";

// 2. CHỈ import các Module hỗ trợ từ 'swiper/modules'
import { Navigation, Pagination, A11y } from "swiper/modules";

// 3. Import CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideNavButtons from "./SlideNavButtons";

const API_URL = "https://fakestoreapi.com/products";

const CustomSlider1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 1. Định nghĩa hàm async ngay BÊN TRONG useEffect
    const getProductsFromBackend = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Lỗi mạng");
        const data = await response.json();

        // 2. Cập nhật state sau khi đã có dữ liệu từ await
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    // 3. Thực thi hàm
    getProductsFromBackend();
  }, []); // [] đảm bảo chỉ chạy 1 lần khi mount

  console.log(products);

  return (
    <div>
      <h1>CustomSlider</h1>
      <br />

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 2 },
          740: { slidesPerView: 3 },
          1275: { slidesPerView: 4 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-red-200 !flex justify-center items-center"
          >
            <div className="border-2 border-blue-500 rounded-lg overflow-hidden justify-center items-center">
              <Image
                src={item.image}
                width={150}
                height={150}
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}

        <SlideNavButtons />
      </Swiper>
    </div>
  );
};

export default CustomSlider1;
