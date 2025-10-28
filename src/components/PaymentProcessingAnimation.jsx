// src/components/PaymentProcessingAnimation.jsx
import React from "react";
import "../styles/PaymentProcessingAnimation.css";

const PaymentProcessingAnimation = () => {
  return (
    <div className="processing-container">
      <div className="left-side">
        <div className="card">
          <div className="card-line"></div>
          <div className="buttons"></div>
        </div>
        <div className="post">
          <div className="post-line"></div>
          <div className="screen">
            <div className="dollar">₹</div>
          </div>
          <div className="numbers"></div>
          <div className="numbers-line2"></div>
        </div>
      </div>
      <div className="right-side">
        <div className="new">Processing Payment</div>
      </div>
    </div>
  );
};

export default PaymentProcessingAnimation;
