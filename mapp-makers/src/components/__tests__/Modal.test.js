// Modal.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from '../Modal'; 
import '@testing-library/jest-dom';


describe('Modal Component', () => {
  test('renders Modal component when open is true', () => {
    const handleClose = jest.fn(); // Mock function for onClose event

    // Render the Modal component with open as true and a mock child component
    const { getByText } = render(
      <Modal open={true} onClose={handleClose}>
        <div>Mock Child Component</div>
      </Modal>
    );

    // Check if the modal content is rendered when open is true
    expect(getByText('Mock Child Component')).toBeInTheDocument();

  });

  test('does not render Modal component when open is false', () => {
    const handleClose = jest.fn(); // Mock function for onClose event

    // Render the Modal component with open as false
    const { container } = render(<Modal open={false} onClose={handleClose} />);

    // Check if the modal content is not rendered when open is false
    expect(container.firstChild).toBeNull();
  });

  test('handles close button click', () => {
    const handleClose = jest.fn(); // Mock function for onClose event

    // Render the Modal component with open as true
    const { getByText } = render(
      <Modal open={true} onClose={handleClose}>
        <div>Mock Child Component</div>
      </Modal>
    );

    // Click on the close button
    fireEvent.click(getByText('x')); // Assuming 'x' is the close button

    // Check if the close button click event is handled correctly
    expect(handleClose).toHaveBeenCalledTimes(1); // Ensure the onClose function is called
  });

    // Add more test cases to cover other scenarios or edge cases as they arise in future iterations
  });
