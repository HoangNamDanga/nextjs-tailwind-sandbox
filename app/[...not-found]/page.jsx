import React from "react";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div
      className="bg-red-100"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>404 - Trang không tìm thấy</h1>
      <Link href="/">Quay lại trang chủ</Link>
    </div>
  );
};

export default NotFoundPage;

//Thư mục [...not-found] có độ ưu tiên cao hơn: Thư mục này thường được dùng để tạo các route động hoặc xử lý 404 tùy chỉnh một cách phức tạp hơn. Khi nó tồn tại, Next.js ưu tiên sử dụng nó thay vì file not-found.jsx đơn giản
// Cách này (Nếu cần xử lý route phức tạp): Giữ lại thư mục [...not-found] và xóa file not-found.jsx đi.
// hiện tại code ăn cách này
