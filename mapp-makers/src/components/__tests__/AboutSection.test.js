// AboutSection.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { AboutSection } from '../AboutSection'; 
import '@testing-library/jest-dom';

describe('AboutSection Component', () => {
  test('renders about section with correct content', () => {
    // Render the AboutSection component
    const { getByText } = render(<AboutSection />);

    // Check if the main heading and key content are rendered
    expect(getByText('About Section')).toBeInTheDocument();
    expect(getByText('MAPP is an attempt to capture student attendance and reduce the possibilities of errors while doing so.')).toBeInTheDocument();
    expect(getByText('Why regular attendance apps don\'t work?')).toBeInTheDocument();
    expect(getByText('How is Mapp different?')).toBeInTheDocument();
    expect(getByText('In future iterations:')).toBeInTheDocument();
    expect(getByText('APP CONTRIBUTORS:')).toBeInTheDocument();

    // Check if specific contributors' names are present
    expect(getByText('Dakota Smith')).toBeInTheDocument();
    expect(getByText('Duaa Fatima Khawaja')).toBeInTheDocument();
    expect(getByText('Edwin Bonilla')).toBeInTheDocument();
    expect(getByText('Holly Boaz')).toBeInTheDocument();
    expect(getByText('Robert Hood')).toBeInTheDocument();

  });

});
