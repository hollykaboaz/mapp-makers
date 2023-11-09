import React from 'react'
import defaultImage from '../assets/sign_in_background.jpg';


export const CourseHeader = (props) => {
  const backgroundImage = props.customImage || defaultImage;
  return (
    
    <div className="flex-col text-white text-3xl font-semibold relative max-w-full overflow-hidden min-h-[240px] pt-44 pb-7 px-5 self-start max-md:max-w-full max-md:pt-10">
      <img
       src={backgroundImage}

      className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
      />
      {props.courseName}{props.courseSection}
    </div>
  )
}



