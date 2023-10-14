import '../../index.css';
import React, { useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultiForm';
import  emailForm  from './multistepForms/EmailForm';
import  passForm  from './multistepForms/PassForm';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import SecondaryButton from "../../components/SecondaryButton";
import {StepperControl} from "../../components/StepperControl";
import {Stepper} from "../../components/Stepper";


function SignUpForm() {
  const auth = getAuth();


  const INITIAL_DATA = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }


  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      React.createElement(emailForm, { ...data, updateFields }),
      React.createElement(passForm, { ...data, updateFields }),
    ]);


    async function onSubmit(e) {
      e.preventDefault();
  
      if (isLastStep) {
        try {
          // Use Firebase's createUserWithEmailAndPassword to create a new user
          await createUserWithEmailAndPassword(auth, data.email, data.password);
          alert("Successful Account Creation");
          await sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
              // ...
            });
        } catch (error) {
          // Handle any registration errors here
          alert("Registration failed. Please try again.");
          console.log(error);
        }
      } else {
        next();
      }
    }



    return (
        <form onSubmit={onSubmit}>

          <Stepper
              steps = {[
                "Enter your email address",
                "Create your password",
                "complete",
              ]}
              currentStep= {currentStepIndex + 1}
          />
          <div className="flex flex-col gap-4">
            {step}
            <div className='buttonContainer'>
            <SecondaryButton  type="submit" text={isLastStep ? "Sign Up" : "Next"}/>
            {!isFirstStep && (
                <button className='mt-4 bg-gray-200 text-black text-center px-4 py-2 w-full rounded text-lg' type="button" onClick={back}>
                  Back
                </button>
            )}
          </div>
          </div>
        </form>
    );
  }
  
  export default SignUpForm;