import '../../components/App.css';
import React, { useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultiForm';
import  emailForm  from '../../components/form/EmailForm';
import  passForm  from '../../components/form/PassForm';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";


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
      <div className=''>
        <form onSubmit={onSubmit}>
          <div className='stepCounter'>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className='buttonContainer'>
            <button className='mt-8 bg-black text-white text-center px-4 py-2 w-full rounded text-lg' type="submit">{isLastStep ? "Sign Up" : "Next"}</button>
            {!isFirstStep && (
                <button className='mt-4 bg-gray-200 text-black text-center px-4 py-2 w-full rounded text-lg' type="button" onClick={back}>
                  Back
                </button>
            )}
          </div>
        </form>
      </div>
    );
  }
  
  export default SignUpForm;