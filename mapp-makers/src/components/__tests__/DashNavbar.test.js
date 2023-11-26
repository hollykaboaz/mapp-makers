// DashNavbar.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DashNavbar } from '../DashNavbar';
import '@testing-library/jest-dom';


describe('DashNavbar Component', () => {
  test('renders DashNavbar component with navigation links', () => {
    const { getByText } = render(<DashNavbar />);

    // Test if navigation links are present
    expect(getByText('Classes')).toBeInTheDocument();
    expect(getByText('Students')).toBeInTheDocument();
    expect(getByText('Attendance')).toBeInTheDocument();

    // Add more assertions to test the presence of specific elements or behavior as they become available
  });

  test('handles item click correctly', () => {
    const { getByText } = render(<DashNavbar />);

    // Click on a navigation link
    fireEvent.click(getByText('Students'));

    // Add assertions to check if the clicked item is selected or other expected behavior
    expect(getByText('Students')).toHaveClass('font-medium'); // Example assertion
  });

    // Add more test cases to cover other scenarios or edge cases as they arise in future iterations
  });
