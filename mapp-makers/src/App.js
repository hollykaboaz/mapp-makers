import './App.css';
import { EmailComp } from './components/EmailComp';
import { PassComp } from './components/PassComp';
import { Stepper } from './components/Stepper';
import { StepperControl } from './components/StepperControl';
import { useContext, useState } from 'react';
import {StepperContext} from "./Context/StepperContext";



function App() {
const [currentStep, setCurrentStep] = useState(1);
const [userData, setUserData]  = useState("");
const [finalData, setFinalData] = useState([]);
  const steps = [
    "Enter your email address",
    "Create your password"
  ]


  const displayStep =(step)=> {
    switch(step){
      case 1:
        return <EmailComp/>
      case 2:
        return <PassComp/>
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

    <div className="md:w-1/2 mx-auto shadow-xl counded-2xl pb-2 bg-white">
    {/* Stepper */}
    <div className=" container horizontal mt-5">
    <Stepper
    steps = {steps}
    currentStep= {currentStep}
    />
    </div>

    <div className="my-10 p-10">
      <StepperContext.Provider value={{
        userData,
        setUserData,
        finalData,
        setFinalData
      }}>

        {displayStep(currentStep)}
      </StepperContext.Provider>
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
