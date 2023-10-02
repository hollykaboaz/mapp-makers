import React from 'react'

export const StepTwo = ({ nextStep, prevStep, handleChange, verificationCode }) => {
  return (
    <div className="form">
      <label>Verification Code:</label>
      <input
        type="text"
        value={verificationCode}
        onChange={handleChange('verificationCode')}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  )
}
