import React from "react";
import C01SimpleHelloWorldModal from "./components/C01SimpleHelloWorldModal";
import C02ShowImageModal from "./components/C02ShowImageModal";
import C03VideoPlayerModal from "./components/C03VideoPlayerModal";
import C04ShowChartModal from "./components/C04ShowChartModal";
import C05MoneyTrackingModal from "./components/C05MoneyTrackingModal";
import C06ConfirmationModal from "./components/C06ConfirmationModal";
import C07InputFormModal from "./components/C07InputFormModal";
import C08TimerCountdownModal from "./components/C08TimerCountdownModal";

const ModalPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>This is Modal Page</h1>
      <br />
      <br />
      <br />
      <C01SimpleHelloWorldModal />
      <br />
      <C02ShowImageModal />

      <br />
      <C03VideoPlayerModal />

      <br />
      <C04ShowChartModal />

      <br />
      <C05MoneyTrackingModal />
      <br />

      <C06ConfirmationModal />

      <br />
      <C07InputFormModal />

      <br />
      <C08TimerCountdownModal />
    </div>
  );
};

export default ModalPage;
