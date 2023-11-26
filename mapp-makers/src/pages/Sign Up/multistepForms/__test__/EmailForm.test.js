import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmailForm from '../EmailForm';
import '@testing-library/jest-dom';

describe('EmailForm Component', () => {
  it('renders the email form with input fields', () => {
    const { getByLabelText } = render(<EmailForm email="" firstName="" lastName="" updateFields={() => {}} />);

    // Check if the input fields render correctly
    const emailInput = getByLabelText('Email');
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');

    expect(emailInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(firstNameInput).toHaveAttribute('type', 'text');
    expect(lastNameInput).toHaveAttribute('type', 'text');
  });

  it('updates the input fields when the user types', () => {
    const updateFieldsMock = jest.fn();
    const { getByLabelText } = render(<EmailForm email="" firstName="" lastName="" updateFields={updateFieldsMock} />);

    // Simulate user typing in the input fields
    const emailInput = getByLabelText('Email');
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

    expect(updateFieldsMock).toHaveBeenCalledTimes(3);
    expect(updateFieldsMock).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(updateFieldsMock).toHaveBeenCalledWith({ firstName: 'John' });
    expect(updateFieldsMock).toHaveBeenCalledWith({ lastName: 'Doe' });
  });
  // Add more test cases to cover other scenarios or edge cases as they arise in future iterations

});
