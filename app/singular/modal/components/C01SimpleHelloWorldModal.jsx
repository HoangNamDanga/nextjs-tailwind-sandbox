"use client";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
const C01SimpleHelloWorldModal = () => {
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
        className="px-4 py-2 bg-blue-900 rounded-lg"
        onClick={openModalHandler}
      >
        Show SimpleHelloWorld Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Nam Mở Modal này"
      >
        <div className="my-4 w-[600px] max-w-full">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse
            ducimus dolorum aperiam doloremque corporis! Consectetur unde
            molestiae tenetur veritatis quia. Nobis deserunt molestiae ab
            adipisci officia velit beatae eos!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default C01SimpleHelloWorldModal;
