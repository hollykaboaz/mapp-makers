import React from 'react'

export const StepThree = ({ prevStep, handleChange, password }) => {
  return (
    <div className="form">
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handleChange('password')}
      />
      <button onClick={prevStep}>Previous</button>
      <button type="submit">Sign Up</button>
    </div>
  )
}
