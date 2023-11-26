// TextInput.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import TextInput from '../TextInput'; 

describe('TextInput Component', () => {
  test('renders TextInput component with label and value', () => {
    const label = 'Username';
    const value = 'JohnDoe';

    const { getByLabelText } = render(
      <TextInput label={label} value={value} onChange={() => {}} />
    );

    // Ensure label and input are rendered
    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByLabelText(label)).toHaveValue(value);
  });

  test('updates value when input changes', () => {
    const label = 'Username';
    let value = ''; // Store the value internally
  
    const handleChange = (event) => {
      value = event.target.value; // Update the value internally
    };
  
    const { getByLabelText } = render(
      <TextInput label={label} value={value} onChange={handleChange} />
    );
  
    const input = getByLabelText(label);
  
    // Simulate triggering the change event with the expected value
    fireEvent.change(input, { target: { value: 'NewValue' } });
  
    // Check if the internal value has been updated correctly
    expect(value).toBe('NewValue');
  });
  
  

    // Add more test cases to cover other scenarios or edge cases as they arise in future iterations
});
