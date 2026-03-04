"use client";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import { months, expenses } from "../../../../__mock/chartData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 2000,
      max: 4000,
      ticks: {
        stepSize: 500,
        callback: (value) => Number(value) / 1000 + "K",
      },
    },
  },
};

const charData = {
  labels: months,
  datasets: [
    {
      label: "expense",
      data: expenses,
      borderColor: "#ca3a12",
      backroundColor: "transparent",
      pointBorderColor: "transparent",
      tension: 0.25,
    },
  ],
};

const C04ShowChartModal = () => {
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
        Show Modal Chart
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title="Nam Mở Modal Chart "
      >
        <div className="my-4 w-[800px] max-w-full">
          <Line options={chartOptions} data={charData} />
        </div>
      </Modal>
    </div>
  );
};

export default C04ShowChartModal;
