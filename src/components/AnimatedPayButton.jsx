import React from 'react';
import { BiRupee } from 'react-icons/bi'; // We'll use this for the rupee icon
import '../styles/AnimatedPayButton.css'; // We will create this CSS file next

const AnimatedPayButton = ({ onClick, disabled, children }) => {
  return (
    <button className="pay-btn" onClick={onClick} disabled={disabled}>
      <span className="btn-text">{children}</span>
      <div className="icon-container">
        {/* Card Icon */}
        <svg viewBox="0 0 24 24" className="icon card-icon">
          <path
            d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
            fill="currentColor"
          ></path>
        </svg>
        
        {/* Payment Icon */}
        <svg viewBox="0 0 24 24" className="icon payment-icon">
          <path
            d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Rupee Icon (Replaced Dollar) */}
        <BiRupee className="icon rupee-icon" />

        {/* Wallet Icon (Default) */}
        <svg viewBox="0 0 24 24" className="icon wallet-icon default-icon">
          <path
            d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Check Icon */}
        <svg viewBox="0 0 24 24" className="icon check-icon">
          <path
            d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default AnimatedPayButton;