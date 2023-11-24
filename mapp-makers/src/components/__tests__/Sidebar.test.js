// Sidebar.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Sidebar from '../Sidebar'; 

// Mock the FontAwesomeIcon component
jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => <i className="mock-icon" />,
  }));

describe('Sidebar Component', () => {
  test('renders Sidebar component with user info and course links', () => {
    const courses = ['Course 1', 'Course 2']; // Sample courses array
    const onCourseSelect = jest.fn(); // Mock function to handle course selection

    const { getByText, getByRole } = render(
      <Sidebar courses={courses} onCourseSelect={onCourseSelect} />
    );

    // Ensure user info is rendered
    expect(getByText('Welcome back,')).toBeInTheDocument();
    expect(getByText('Dr.Johnson')).toBeInTheDocument();

    // Ensure course links are rendered
    courses.forEach((course) => {
      expect(getByText(course)).toBeInTheDocument();
    });
  });

  test('opens and closes add course modal', () => {
    const courses = []; // Empty courses array
    const onCourseSelect = jest.fn(); // Mock function to handle course selection

    const { getByRole, getByText, queryByText } = render(
      <Sidebar courses={courses} onCourseSelect={onCourseSelect} />
    );

    const addButton = getByRole('button', { name: 'Add Course' }); // Update to match the aria-label

    // Click on add course button
    fireEvent.click(addButton);

    // Ensure the modal opens by checking the presence of the 'Add Course' header or other content
    expect(getByText('Add Course')).toBeInTheDocument(); // Update as per your modal content

    // Find and click the close button inside the modal
    const closeButton = getByText('x');
    fireEvent.click(closeButton);

    // Ensure the modal closes by checking the absence of the 'Add Course' header or other content
    expect(queryByText('Add Course')).not.toBeInTheDocument(); // Update as per your modal content
  });


  // Add more test cases to cover other scenarios or edge cases
});
