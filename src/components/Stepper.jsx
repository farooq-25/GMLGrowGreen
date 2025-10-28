// src/components/Stepper.jsx
import React from 'react';
import '../styles/Stepper.css';

const Stepper = ({ activeStep }) => {
  const steps = ['Shipping', 'Payment', 'Success'];
  
  return (
    <div className="stepper-wrapper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        let stepClass = 'stepper-item';
        if (stepNumber === activeStep) {
          stepClass += ' active';
        } else if (stepNumber < activeStep) {
          stepClass += ' completed';
        }

        return (
          
          <React.Fragment key={step}>
            <div className={stepClass}>
              <div className="step-counter">
                {stepNumber < activeStep ? '✔' : stepNumber}
              </div>
              <div className="step-name">{step}</div>
            </div>
            {stepNumber < steps.length && <div className="stepper-line"></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;