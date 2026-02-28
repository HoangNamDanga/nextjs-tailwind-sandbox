import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Trang không tìm thấy</h1>
      <Link href="/">Quay lại trang chủ</Link>
    </div>
  );
}
//Trong NextJs not-found đóng vai trò là UI mặc định để xử lý lỗi 404.
// Tự động gọi khi url ko khớp với bất kỳ route nào.
// Khi bạn chủ động gọi hàm notFound() trong các server component hoặc data fetching để thông báo dữ liệu không tồn tại
