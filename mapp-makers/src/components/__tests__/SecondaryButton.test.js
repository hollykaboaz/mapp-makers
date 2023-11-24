// SecondaryButton.test.js

import React from 'react';
import { render } from '@testing-library/react';
import SecondaryButton from '../SecondaryButton';
import '@testing-library/jest-dom';


describe('SecondaryButton Component', () => {
  test('renders SecondaryButton component with provided text', () => {
    const buttonText = 'Click Me';
    const { getByText } = render(<SecondaryButton text={buttonText} />);
    
    // Test rendering of the button with provided text
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  test('renders SecondaryButton component with correct styles', () => {
    const buttonText = 'Click Me';
    const { getByText } = render(<SecondaryButton text={buttonText} />);
    
    // Test specific styles applied to the button
    const button = getByText(buttonText);
    expect(button).toHaveClass('bg-stone-800');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('text-center');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-2');
    expect(button).toHaveClass('w-full');
    expect(button).toHaveClass('rounded');
    expect(button).toHaveClass('text-lg');
  });

  // Add more test cases to cover other scenarios or edge cases
});
