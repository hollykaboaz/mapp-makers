import './components/App.css';
import React, { useState } from 'react';
import { useMultistepForm } from './components/useMultiForm';
import  emailForm  from './components/emailForm';
import  passForm  from './components/passForm';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";


function App() {
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
      <div className='formContainer'>
        <form onSubmit={onSubmit}>
          <div className='stepCounter'>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className='buttonContainer'>
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default App;