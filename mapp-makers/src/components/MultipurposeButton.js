import { useState } from "react";
import React from 'react'

export const MultipurposeButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const getColorClass = () => { //when the following text is entered
    if (props.text==='present') {
      return 'bg-green-200 text-green-700';
    } else if (props.text === 'absent') {
      return 'bg-red-200 text-red-700';
    } else if (props.value) { // when no text is entered but a color value is passed
      return `'bg-${props.value}-200 text-${props.value}-700'`; 
    }else {
      return 'bg-gray-200 text-gray-700' // when text other than above without a color value is passed
    }
  }
  const handleClick = () => {
    setIsActive(true);
    if (props.onclick){
      props.onclick();
    }
  }



  return (
    <div className={`flex flex-col px-1 rounded-2xl min-w-[50px] max-w-[150px] ${getColorClass()} 
    ${isActive ? 'bg-opacity-75' : ''}
     hover:bg-opacity-70 cursor-pointer`}onClick={props.onClick}>

    <div className={`text-sm self-center whitespace-normal px-1  mt-1.5 mb-2 min-w-[50px] max-w-[1500px] flex-shrink-0'`}>
      {props.text}
      
    </div>

    </div>
  )
}
