import '../../index.css';
import React, { useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultiForm';
import  EmailForm  from './multistepForms/EmailForm';
import  PassForm  from './multistepForms/PassForm';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import SecondaryButton from "../../components/SecondaryButton";


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
      <EmailForm {...data} updateFields={updateFields} />,
      <PassForm {...data} updateFields={updateFields} />,
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
        console.log("updateFields:", updateFields);
        next();
      }
    }



    return (
        <form onSubmit={onSubmit}>
          <div className='stepCounter'>
            {currentStepIndex + 1} / {steps.length}
          </div>
          <div className="flex flex-col gap-4">
          {step}
      <div className='buttonContainer'>
        <SecondaryButton type="submit" text={isLastStep ? "Sign Up" : "Next"} />
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