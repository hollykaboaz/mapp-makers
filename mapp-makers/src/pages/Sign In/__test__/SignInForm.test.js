import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SignInForm from '../SignInForm';
import { getAuth } from 'firebase/auth';
import '@testing-library/jest-dom';


jest.mock('firebase/auth', () => ({
    getAuth: () => ({
        signInWithEmailAndPassword: jest.fn(), // Mock the signInWithEmailAndPassword function
      }),
}));

describe('SignInForm Component', () => {
  test('renders Sign In form', async () => {
    const { getByLabelText, findAllByText } = render(<SignInForm />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButtons = await findAllByText('Log In'); // Await the promise

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButtons.length).toBeGreaterThan(1);
  });

  test('handles user input in the form fields', () => {
    const { getByLabelText } = render(<SignInForm />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });
  
  test('submits the form with user credentials', async () => {
    render(<SignInForm />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    
    // Use queryAllByText to get all elements containing 'Log In'
    const loginButtons = screen.queryAllByText('Log In');

    // Choose the correct button from the collection
    const loginButton = loginButtons.find(button => button.tagName === 'BUTTON');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    await waitFor(() => expect(getAuth().signInWithEmailAndPassword).toHaveBeenCalled());
  });
  
  // Add more test cases as needed in future iteration
});
