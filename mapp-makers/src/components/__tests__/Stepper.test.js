// Stepper.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { Stepper } from '../Stepper'; 

describe('Stepper Component', () => {
  test('renders Stepper component with provided steps', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    const currentStep = 2; // Assuming Step 2 is the current step
    
    const { getByText } = render(<Stepper steps={steps} currentStep={currentStep} />);
    
    // Test rendering of each step description
    steps.forEach((stepDescription) => {
      expect(getByText(stepDescription)).toBeInTheDocument();
    });
  });

  test('applies proper styles to the steps based on their state', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    const currentStep = 2; // Assuming Step 2 is the current step
    
    const { container } = render(<Stepper steps={steps} currentStep={currentStep} />);
    
    // Test specific styles applied to the steps based on their completion and highlighting
    // Add assertions here to check CSS classes and styles applied to the steps
    // For example:
    expect(container.querySelector('.border-gray-900')).toBeInTheDocument(); // Checks if the border color is applied for completed steps
    // Add more assertions based on the expected styles
  });
});