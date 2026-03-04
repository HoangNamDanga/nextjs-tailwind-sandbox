"use client";

import { AiOutlineClose } from "react-icons/ai";

// Chúng ta kiểm soát trạng thái của Modal tại Component cha của nó (trạng thái đóng và mở)
// Modal chỉ là một Component bao ngoài (wrapper) có nhiệm vụ xử lý phần giao diện (UI)
// Nó nằm ở chính giữa màn hình và có một lớp nền (background) bán trong suốt
// Chúng ta có thể đóng Modal này bằng cách nhấp vào lớp nền hoặc nhấp vào nút đóng

// Important 2:
// Chúng ta cần nhận một số Props (thuộc tính) truyền vào
// isOpen: Để xử lý việc hiển thị (show) hoặc ẩn (hide) Modal này
// onDismiss: Để có thể gửi ngược lại lệnh đóng (dismiss) về cho Component cha -> (Giải thích thêm: Khi bạn bấm nút X ở Modal, nó sẽ gọi hàm này để báo cho cha biết là "Con muốn đóng rồi, cha đổi state đi")
// children: Để hiển thị (render) các nội dung con nhận được vào bên trong Modal của chúng ta

const Modal = ({ isOpen, title = "My Modal", onDismiss, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onDismiss}
    >
      <div
        className="min-w-[400px] max-w-full overflow-x-hidden min-h-[200px] bg-white rounded-xl p-2 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-4 top-3 text-2xl text-red-600 cursor-pointer"
          onClick={onDismiss}
        />
        <div className="w-full h-10 flex items-center mb-1 border border-b-gray-300">
          <h1 className="text-xl- font-bold">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
