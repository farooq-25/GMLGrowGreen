// src/pages/Success.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import { CheckCircle2 } from "lucide-react";
import "../styles/SuccessPage.css";
const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page-container">
      <Stepper activeStep={3} />

      <div className="success-content-box">
        <CheckCircle2
          className="success-checkmark-icon"
          size={80}
          strokeWidth={1.5}
        />
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">
          Thank you for your order. Your items will be processed shortly.
        </p>
        <button className="back-home-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
