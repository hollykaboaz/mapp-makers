import React from 'react'

export const StepperControl = (props) => {
  return (
    <div className = "container flex justify-around mt-4 mb-8">
      {/* back button */}
      <button 
      onClick={() =>props.handleClick()}
      className= {`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-2oo ease-in-out ${
        props.currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
      }`
      }>
        Back
      </button>

      {/* next button */}
      <button 
      onClick={() =>props.handleClick("next")}
      className= "bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-2oo ease-in-out hover:bg-slate-700 hover:text-white">
       {props.currentStep === props.steps.length -1 ? "Confirm" : "Next"}
      </button>

    </div>
  );
}
