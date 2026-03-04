"use client";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import Image from "next/image";

const C02ShowImageModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-800 rounded-lg"
        onClick={openModalHandler}
      >
        Show Image Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Nam Mở Modal Ảnh này"
      >
        <div className="my-4 w-[600px] max-w-full">
          <Image
            src="/assets/zalo-web.jpg"
            width={600}
            height={300}
            className="rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default C02ShowImageModal;
