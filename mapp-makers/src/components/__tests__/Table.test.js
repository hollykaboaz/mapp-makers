// Table.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from '../Table'; 

describe('Table Component', () => {
  const testData = [
    {
      id: 1,
      image: 'example.jpg',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john@example.com',
      attendance: '80%',
    },
    // Add more test data if needed
  ];

  test('renders Table component with provided data', () => {
    const { getByText, getByAltText } = render(<Table data={testData} />);

    // Ensure table headers are rendered
    expect(getByText('Last Name')).toBeInTheDocument();
    expect(getByText('First Name')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Attendance')).toBeInTheDocument();

    // Ensure data rows are rendered with correct content
    expect(getByText('Doe')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('john@example.com')).toBeInTheDocument();
    expect(getByText('80%')).toBeInTheDocument();

    // Ensure images are rendered correctly
    const image = getByAltText('John');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'example.jpg');
  });

  // Add more test cases to cover other scenarios or edge cases
});
