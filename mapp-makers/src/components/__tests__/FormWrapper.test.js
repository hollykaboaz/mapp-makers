// FormWrapper.test.js

import React from 'react';
import { render } from '@testing-library/react';
import FormWrapper from '../FormWrapper'; 
import '@testing-library/jest-dom';


describe('FormWrapper Component', () => {
  test('renders FormWrapper component with title and children', () => {
    const mockTitle = 'Sample Title';
    const mockChildComponent = <div>Mock Child Component</div>;

    // Render the FormWrapper component with a mock title and child component
    const { getByText } = render(
      <FormWrapper title={mockTitle}>
        {mockChildComponent}
      </FormWrapper>
    );

    // Check if the title and children are rendered
    expect(getByText('Sample Title')).toBeInTheDocument();
    expect(getByText('Mock Child Component')).toBeInTheDocument();

  });

    // Add more test cases to cover other scenarios or edge cases as they arise in future iterations
  });
