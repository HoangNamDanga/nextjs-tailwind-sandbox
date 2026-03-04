"use client";
import { useEffect, useState } from "react";
import Modal from "../../../components/modal/Modal";
const C08TimerCountdownModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [timerId, setTimerID] = useState("");
  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let timeout; // Sử dụng biến cục bộ thay vì State

    if (showModal) {
      timeout = setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }

    // Cleanup function: Tự động dọn dẹp khi showModal thay đổi hoặc component unmount
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [showModal]); // Chỉ phụ thuộc vào trạng thái đóng/mở của Modal

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 rounded-lg"
        onClick={openModalHandler}
      >
        Show TimerCountdown Modal
      </button>
      <h1 className="text-2xl text-blue-300">timer Id: {timerId}</h1>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Nam Mở TimerCountdown Modal(đếm ngược thời gian) này"
      >
        <div className="my-4">
          <h1 className="text-xl">
            Modal này sẽ được đóng sau 3 giây (seconds)
          </h1>
          <h2 className="text-xl"></h2>
        </div>
      </Modal>
    </div>
  );
};

export default C08TimerCountdownModal;
