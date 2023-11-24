// StepperControl.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepperControl } from '../StepperControl';

describe('StepperControl Component', () => {
  test('renders StepperControl component with back and next buttons', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    const currentStep = 2; // Assuming Step 3 is the current step
    
    const { getByText } = render(
      <StepperControl steps={steps} currentStep={currentStep} handleClick={() => {}} />
    );
    
    expect(getByText('Back')).toBeInTheDocument();
    expect(getByText('Confirm')).toBeInTheDocument();
  });

  test('calls handleClick function on button click', () => {
    const mockHandleClick = jest.fn();
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    const currentStep = 1; // Assuming Step 1 is the current step
    
    const { getByText } = render(
      <StepperControl steps={steps} currentStep={currentStep} handleClick={mockHandleClick} />
    );

    // Trigger the click event on the Back button
    fireEvent.click(getByText('Back'));

    expect(mockHandleClick).toHaveBeenCalled();

    // Trigger the click event on the Next button
    fireEvent.click(getByText('Next'));

    expect(mockHandleClick).toHaveBeenCalledWith('next');
  });
});