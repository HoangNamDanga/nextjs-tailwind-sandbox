"use client";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import Image from "next/image";
const C02VideoPlayerModal = () => {
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
        Show Video Player Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Nam Mở Modal Mỹ - Iran này"
      >
        <div className="my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VfAeu58klBQ?si=Wnww0XErhIZtyUik"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default C02VideoPlayerModal;
