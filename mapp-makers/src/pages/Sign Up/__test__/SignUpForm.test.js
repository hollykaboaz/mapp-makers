import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignUpForm from '../SignUpForm';
import '@testing-library/jest-dom';


describe('SignUpForm Component', () => {
  it('renders SignUpForm component', () => {
    render(<SignUpForm />);
    // Write assertions to check if the form renders correctly
    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
    // Add more assertions based on your form structure
  });

  it('allows user to fill out and submit the form', async () => {
    render(<SignUpForm />);
    
    // Simulate user filling out the form
    // Example: Fill out the email field
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Continue filling out other fields if needed

    // Simulate form submission
    const submitButton = screen.getByText('Next'); // Update this selector based on your form
    fireEvent.click(submitButton);

    // Write assertions to test form submission behavior
    await waitFor(() => {
      // Expectations for what should happen after submission
      // For example, check if it proceeds to the next step or completes the form
    });
  });

  // Add more test cases for different scenarios in the form
});
