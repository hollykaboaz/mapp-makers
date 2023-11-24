// CourseBanner.test.js

import React from 'react';
import { render } from '@testing-library/react';
import CourseBanner from '../CourseBanner'; 
import '@testing-library/jest-dom';


describe('CourseBanner Component', () => {
  test('renders course banner with provided courseName', () => {
    const courseName = 'Example Course';
    const { getByText, getByAltText } = render(<CourseBanner courseName={courseName} />);

    // Check if the course name is rendered
    expect(getByText(courseName)).toBeInTheDocument();

    // Check if the image with the correct alt text is rendered
    const courseImage = getByAltText('');
    expect(courseImage).toBeInTheDocument();
    expect(courseImage.getAttribute('src')).toEqual('course_background.jpg'); // Replace with the actual image path

  });

});
