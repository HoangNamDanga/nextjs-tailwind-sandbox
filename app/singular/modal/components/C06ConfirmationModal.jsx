"use client";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
const C06ConfirmationModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const onConfirmModalHandler = () => {
    alert("Modal Confirmed");
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-900 rounded-lg"
        onClick={openModalHandler}
      >
        Show Confirmation Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Nam Mở Confirmation Modal này"
      >
        <div className="my-4 flex flex-col justify-center items-center gap-8">
          <h1>Are you sure?</h1>
          <div className="flex justify-center items-center gap-4">
            <button
              className="px-4 py-2 bg-green-900 text-white rounded-lg"
              onClick={onConfirmModalHandler}
            >
              Confirm
            </button>
            <button
              className="px-4 py-2 bg-red-900 text-white rounded-lg"
              onClick={closeModalHandler}
            >
              Dismiss
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default C06ConfirmationModal;
