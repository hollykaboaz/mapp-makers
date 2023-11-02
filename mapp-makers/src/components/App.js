import EmailForm from '../pages/Sign Up/multistepForms/EmailForm'
import PassForm from '../pages/Sign Up/multistepForms/PassForm'
import {Final} from '../pages/Sign Up/multistepForms/Final'
import { Stepper } from './Stepper';
import { StepperControl } from './StepperControl';
import { useContext, useState } from 'react';




function App() {
const [currentStep, setCurrentStep] = useState(1);
const [userData, setUserData]  = useState("");
const [finalData, setFinalData] = useState([]);
  const steps = [
    "Enter your email address",
    "Create your password", 
    "complete",
  ]


  const displayStep =(step)=> {
    switch(step){
      case 1:
        return <EmailForm/>
      case 2:
        return <PassForm/>
      case 3:
        return <Final/>
      default:
    }
  }
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep ++ : newStep-- ;
    //check if the steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  return (

    <div  className=" mx-auto shadow-xl rounded-2xl pb-2 bg-white">
    {/* Stepper */}
    <div className=" container horizontal mt-5">
    <Stepper
    steps = {steps}
    currentStep= {currentStep}
    />
    </div>

    <div className="my-10 p-10">
     {displayStep(currentStep)}
    </div>

    {/* Navigation controls */}
    <StepperControl
    handleClick = {handleClick}
    currentStep = {currentStep}
    steps={steps}
    
    />
    </div>
    
  );
}

export default App;