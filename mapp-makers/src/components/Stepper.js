import React from 'react'

export const Stepper = () => {
  return (
  <div className="stepper">
      <div className='{step === 1 ? "step active" : "step"}'>1</div>
      <div className='{step === 2 ? "step active" : "step"}'>2</div>
      <div className='{step === 3 ? "step active" : "step"}'>3</div>
  </div>
    
  )
}
