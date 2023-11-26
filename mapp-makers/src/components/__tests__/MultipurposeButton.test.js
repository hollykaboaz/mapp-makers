// MultipurposeButton.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MultipurposeButton } from '../MultipurposeButton'; 
import '@testing-library/jest-dom';


describe('MultipurposeButton Component', () => {
    test('renders MultipurposeButton component with default props', () => {
        const { queryByTestId } = render(<MultipurposeButton />);
        
        // Test default rendering when no props are provided
        const defaultContent = queryByTestId('default-content-identifier');
      
        expect(defaultContent).toBeInTheDocument();
      });

  test('renders MultipurposeButton component with provided text', () => {
    const buttonText = 'present';
    const { getByText } = render(<MultipurposeButton text={buttonText} />);
    
    // Test rendering when text prop is provided
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  test('handles click event', () => {
    const onClickMock = jest.fn(); // Mock function for onClick event
    const { getByText } = render(<MultipurposeButton text="Click Me" onClick={onClickMock} />);
    
    // Simulate a click on the button
    fireEvent.click(getByText('Click Me'));

    // Check if the click event is handled correctly
    expect(onClickMock).toHaveBeenCalledTimes(1); // Ensure the onClick function is called

  });
    // Add more test cases to cover other scenarios or edge cases as they arise in future iterations

});
