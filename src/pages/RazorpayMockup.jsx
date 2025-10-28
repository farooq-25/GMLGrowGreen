// src/pages/RazorpayMockup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import { Lock } from "lucide-react"; // Changed from Zap
import "../styles/RazorpayMockup.css";
import { SiGooglepay, SiApplepay, SiPaytm } from "react-icons/si";
// Make sure BiRupee is imported if you use it (not used in this final version)
// import { BiRupee } from "react-icons/bi";
import AnimatedPayButton from "../components/AnimatedPayButton";
import PaymentProcessingAnimation from '../components/PaymentProcessingAnimation'; // Import the animation component

const RazorpayMockup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi"); // To manage active tab
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsLoading(true); // Start loading animation
    setTimeout(() => {
      // In a real app, you'd wait for a response from the backend/payment gateway
      setIsLoading(false); // Stop loading (optional, as we navigate away)
      navigate("/success"); // Navigate to success page
    }, 2000); // Simulate processing time (2 seconds)
  };

  return (
    <div className="payment-page-container">
      <Stepper activeStep={2} />

      {/* Conditional Rendering: Show Animation or Payment Form */}
      {isLoading ? (
        <PaymentProcessingAnimation /> // Show the animation component when loading
      ) : (
        // Otherwise, show the payment modal
        <div className="payment-modal">
          <div className="payment-header">
            <span>Payment for</span>
            <strong>Your GrowBag Store</strong>
          </div>

          <div className="payment-body">
            <div className="order-details-simple">
              <p className="order-label">Amount Payable</p>
              <p className="order-amount">₹2,499.00</p>
            </div>

            <div className="payment-options-wrapper">
              <div className="payment-options-list">
                <div
                  className={`payment-method ${
                    paymentMethod === "upi" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  UPI
                </div>
                <div
                  className={`payment-method ${
                    paymentMethod === "card" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  Credit / Debit Card
                </div>
                <div
                  className={`payment-method ${
                    paymentMethod === "netbanking" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("netbanking")}
                >
                  Netbanking
                </div>
              </div>

              <div className="payment-options-content">
                {/* === UPI Content === */}
                {paymentMethod === "upi" && (
                  <div className="payment-content-body">
                    <p>Select an app or enter your UPI ID</p>
                    <div className="upi-options">
                      <button className="upi-app-btn">
                        <SiGooglepay size={50} /> {/* Adjusted size */}
                      </button>
                      <button className="upi-app-btn">
                        <SiPaytm size={50} /> {/* Adjusted size */}
                      </button>
                      <button className="upi-app-btn">PhonePe</button>
                      <button className="upi-app-btn">
                        <SiApplepay size={50} /> {/* Adjusted size */}
                      </button>
                    </div>
                    <div className="upi-input-group">
                      <input
                        type="text"
                        placeholder="yourname@upi"
                        className="upi-input"
                      />
                      {/* Use AnimatedPayButton */}
                      <AnimatedPayButton
                        onClick={handlePayment}
                        disabled={isLoading}
                      >
                        {isLoading ? "Verifying..." : "Pay"}
                      </AnimatedPayButton>
                    </div>
                  </div>
                )}

                {/* === Card Content === */}
                {paymentMethod === "card" && (
                  <div className="payment-content-body">
                    <p>Enter your card details.</p>
                    <div className="card-details-form">
                      <div className="form-group">
                        <input
                          type="text"
                          className="card-input"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="card-input"
                          placeholder="Card Holder Name"
                        />
                      </div>
                      <div className="card-row">
                        <div className="form-group">
                          <input
                            type="text"
                            className="card-input"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="card-input"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                      {/* Use AnimatedPayButton */}
                      <AnimatedPayButton
                        onClick={handlePayment}
                        disabled={isLoading}
                      >
                        {isLoading ? "Processing..." : "Pay ₹2,499.00"}
                      </AnimatedPayButton>
                    </div>
                  </div>
                )}

                {/* === Netbanking Content === */}
                {paymentMethod === "netbanking" && (
                  <div className="payment-content-body">
                    <p>Select from popular banks</p>
                    <div className="bank-list">
                      <button className="bank-btn">HDFC Bank</button>
                      <button className="bank-btn">ICICI Bank</button>
                      <button className="bank-btn">State Bank of India</button>
                      <button className="bank-btn">Axis Bank</button>
                      <button className="bank-btn">Kotak Bank</button>
                    </div>
                    {/* Use AnimatedPayButton */}
                    <AnimatedPayButton
                      onClick={handlePayment}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Pay with Netbanking"}
                    </AnimatedPayButton>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="payment-footer">
            <Lock size={14} />
            <span>This is a secure, encrypted payment.</span>
          </div>
        </div>
      )} {/* End of conditional rendering */}
    </div>
  );
};

export default RazorpayMockup;