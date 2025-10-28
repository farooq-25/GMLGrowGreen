import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import { Lock, ChevronDown, ChevronUp } from "lucide-react";
import "../styles/RazorpayMockup.css";
import { SiGooglepay, SiApplepay, SiPaytm } from "react-icons/si";
import AnimatedPayButton from "../components/AnimatedPayButton";
import PaymentProcessingAnimation from "../components/PaymentProcessingAnimation";

const RazorpayMockup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [showMobileMethods, setShowMobileMethods] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/success");
    }, 2000);
  };

  const paymentMethods = [
    { id: "upi", label: "UPI" },
    { id: "card", label: "Credit / Debit Card" },
    { id: "netbanking", label: "Netbanking" },
  ];

  const upiApps = [
    { name: "Google Pay", icon: <SiGooglepay size={40} /> },
    { name: "Paytm", icon: <SiPaytm size={40} /> },
    { name: "PhonePe", icon: <span className="upi-app-text" style={{fontSize:"12px"}}>PhonePe</span> },
    { name: "Apple Pay", icon: <SiApplepay size={40} /> },
  ];

  return (
    <div className="payment-page-container">
      <Stepper activeStep={2} />

      {isLoading ? (
        <PaymentProcessingAnimation />
      ) : (
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

            {/* Mobile Payment Method Selector */}
            <div className="mobile-payment-selector">
              <button
                className="mobile-method-toggle"
                onClick={() => setShowMobileMethods(!showMobileMethods)}
              >
                <span>
                  {paymentMethods.find((m) => m.id === paymentMethod)?.label}
                </span>
                {showMobileMethods ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {showMobileMethods && (
                <div className="mobile-methods-dropdown">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      className={`mobile-method-option ${
                        paymentMethod === method.id ? "active" : ""
                      }`}
                      onClick={() => {
                        setPaymentMethod(method.id);
                        setShowMobileMethods(false);
                      }}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="payment-options-wrapper">
              {/* Desktop Payment Methods Sidebar */}
              <div className="payment-options-list">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`payment-method ${
                      paymentMethod === method.id ? "active" : ""
                    }`}
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    {method.label}
                  </div>
                ))}
              </div>

              <div className="payment-options-content">
                {/* UPI Content */}
                {/* UPI Content */}
                {paymentMethod === "upi" && (
                  <div className="payment-content-body">
                    <p>Select an app or enter your UPI ID</p>

                    <div className="upi-container">
                      <div className="upi-apps-grid">
                        {upiApps.map((app, index) => (
                          <button key={index} className="upi-app-btn">
                            {app.icon}
                          </button>
                        ))}
                      </div>

                      {/* UPI Input Section - Now with input on top */}
                      <div className="upi-input-section">
                        <div className="upi-input-group">
                          <label className="upi-input-label">
                            Enter UPI ID
                          </label>
                          <input
                            type="text"
                            placeholder="yourname@upi"
                            className="upi-input"
                          />
                        </div>
                        <AnimatedPayButton
                          onClick={handlePayment}
                          disabled={isLoading}
                          className="upi-pay-button"
                        >
                          {isLoading ? "Verifying..." : "Pay ₹2,499.00"}
                        </AnimatedPayButton>
                      </div>
                    </div>
                  </div>
                )}
                {/* Card Content */}
                {paymentMethod === "card" && (
                  <div className="payment-content-body">
                    <p>Enter your card details</p>
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
                      <AnimatedPayButton
                        onClick={handlePayment}
                        disabled={isLoading}
                      >
                        {isLoading ? "Processing..." : "Pay ₹2,499.00"}
                      </AnimatedPayButton>
                    </div>
                  </div>
                )}

                {/* Netbanking Content */}
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
      )}
    </div>
  );
};

export default RazorpayMockup;
