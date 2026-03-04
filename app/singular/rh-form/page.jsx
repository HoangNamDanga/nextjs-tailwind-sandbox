"use client";
import React from "react";
import { useForm } from "react-hook-form";
const RHFormPage = () => {
  //1. khai báo hook useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //2. Hàm xử lý khi submit thành công
  const onSubmit = (data) => {
    console.log("Dữ liệu form:", data);
    alert("Gửi form thành công ! kiểm tra console nhé");
  };
  return (
    <div className="max-w-md max-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Đăng ký thông tin
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Họ và tên</label>
          <input
            {...register("name", { required: "Vui lòng nhập họ tên" })}
            className={`w-full p-2 border rounded-mb outline-none ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Vui lòng nhập email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email không đúng định dạng",
              },
            })}
            className={`w-full p-2 border rounded-md outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="dhnam.dang1997@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Số điện thoại</label>
          <input
            type="tel"
            {...register("phone", {
              // Mở ngoặc ở đây
              required: "Vui lòng nhập số điện thoại",
              minLength: {
                value: 10,
                message: "Số điện thoại phải có ít nhất 10 số",
              },
            })} // Đóng ngoặc ở đây
            className={`w-full p-2 border rounded-md outline-none ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            placeholder="0845628668"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="pt-4 pb-2">
          {" "}
          {/* Thêm padding bottom để nới rộng form */}
          <button
            type="submit"
            style={{ backgroundColor: "#2563eb" }} // Dùng style thuần để kiểm tra ngay lập tức
            className="w-full text-white py-2 rounded-md hover:opacity-90 transition duration-200 shadow-md block"
          >
            Gửi thông tin
          </button>
        </div>
      </form>
    </div>
  );
};

export default RHFormPage;
