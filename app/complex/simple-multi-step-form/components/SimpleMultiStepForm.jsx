"use client";
import React from "react";
import { useState, useEffect } from "react";
import StepA from "../components/StepA";
import StepB from "../components/StepB";
import StepC from "../components/StepC";
import StepD from "../components/StepD";
import StepFinal from "../components/StepFinal";
// ThIs is the parent component
// This conponen will control and manage steps and data

//Step A: Customer Identity Info
// Step B : Customer Bisiness Info
// Step C: Customer Financial Info
// Step D : Confirm Form Data

//Step Final : Succes Result

const initialFormData = {
  firstName: "",
  lastName: "",
  businessName: "",
  businessCity: "",
  businessWebsite: "",
  businessEmail: "",
  incomePerMonth: 0,
  taxPercantage: 0,
  agreeToTerms: false,
};

const stepsArray = ["A", "B", "C", "D"];

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState("A");
  const [formData, setFormData] = useState(initialFormData);

  const handleNextStep = () => {
    if (step === "A") setStep("B");
    else if (step === "B") setStep("C");
    else if (step === "C") setStep("D");
  };

  const handlePrevStep = () => {
    const prevMap = {
      B: "A",
      C: "B",
      D: "C",
    };

    setStep((prev) => prevMap[prev] || prev);
  };

  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === "agreeToTerms") {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  //Chung ta can 1 phuong thuc de thuc hien thao tac cuooi cung

  const handleSubmitFormData = () => {
    if (!formData.agreeToTerms) {
      alert("Error!!!! You must agree to Terms of Services !!!");
    } else {
      setStep("Final");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  //Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === "Final") {
      return null;
    }
    return (
      <section className="mt-2 mb-4 flex justify-between">
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${item === step ? "bg-blue-500" : ""}`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };
  return (
    <div className="w-[600px] max-w-full px-6 py-1 mx-auto rounded-lg botder-2 border-dotted border-sky-300">
      {renderTopStepNumbers()}
      {step === "A" ? (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}

      {step === "B" ? (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "C" ? (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "D" ? (
        <StepD
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
      {step === "Final" ? <StepFinal /> : null}
    </div>
  );
};

export default SimpleMultiStepForm;
