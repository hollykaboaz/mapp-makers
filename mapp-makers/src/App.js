import './App.css';
import { Stepper } from './components/Stepper';
import { StepOne } from './components/StepOne';
import {StepTwo} from './components/StepTwo';
import { StepThree } from './components/StepThree';
import { useState } from 'react';

function App() {

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isRobot, setIsRobot] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    switch (field) {
      case 'email':
        setEmail(value);
        break;
      case 'isRobot':
        setIsRobot(value);
        break;
      case 'verificationCode':
        setVerificationCode(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (

    <div className="app">
    <h1>Create an Account</h1>
    <Stepper step={step} />
    {step === 1 && (
      <StepOne
        nextStep={nextStep}
        handleChange={handleChange}
        email={email}
        isRobot={isRobot}
      />
    )}
    {step === 2 && (
      <StepTwo
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        verificationCode={verificationCode}
      />
    )}
    {step === 3 && (
        <StepThree
          prevStep={prevStep}
          handleChange={handleChange}
          password={password}
        />
      )}
    </div>
    
  );
}

export default App;
