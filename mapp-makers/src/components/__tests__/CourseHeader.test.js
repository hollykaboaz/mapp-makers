// CourseHeader.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { CourseHeader } from '../CourseHeader'; 
import '@testing-library/jest-dom';


describe('CourseHeader Component', () => {
  test('renders course header with provided props', () => {
    const courseName = 'Example Course';
    const courseSection = 'Section A';
    const customImage = 'src\assets\sign_in_background.jpg'; 

    const { getByText, getByAltText } = render(
      <CourseHeader courseName={courseName} courseSection={courseSection} customImage={customImage} />
    );

    // Check if the course name and section are rendered
    expect(getByText(new RegExp(courseName, 'i'))).toBeInTheDocument(); // Using regex with 'i' flag for case insensitivity
    expect(getByText(new RegExp(courseSection, 'i'))).toBeInTheDocument(); // Using regex with 'i' flag for case insensitivity

    // Check if the custom image is rendered
    const customImageElement = getByAltText('');
    expect(customImageElement).toBeInTheDocument();
    expect(customImageElement.getAttribute('src')).toEqual(customImage);
  });
});
