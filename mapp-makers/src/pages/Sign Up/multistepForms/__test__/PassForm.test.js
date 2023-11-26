import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import Jest DOM extensions

import PassForm from '../PassForm';

describe('PassForm Component', () => {
  it('renders the password form', () => {
    const { getByLabelText } = render(<PassForm password="" updateFields={() => {}} />);

    // Check if the password input field renders correctly
    const passwordInput = getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password'); // Check if it's a password field
  });

  it('updates the password field when user types', () => {
    const updateFieldsMock = jest.fn();
    const { getByLabelText } = render(<PassForm password="" updateFields={updateFieldsMock} />);

    const passwordInput = getByLabelText('Password');

    // Simulate user typing in the password field
    fireEvent.change(passwordInput, { target: { value: 'newpassword123' } });

    // Check if the updateFields function was called with the correct value
    expect(updateFieldsMock).toHaveBeenCalledWith({ password: 'newpassword123' });
  });    
  // Add more test cases to cover other scenarios or edge cases as they arise in future iterations
});
