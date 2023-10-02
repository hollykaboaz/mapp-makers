


export const StepOne = ({ nextStep, handleChange, email, isRobot }) => {
  return (
    <div className="form">
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleChange('email')}
      />
      <label>
        <input
          type="checkbox"
          checked={isRobot}
          onChange={handleChange('isRobot')}
        />
        I'm not a robot
      </label>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};
  
