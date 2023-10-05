import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import SignUpForm from './pages/Sign Up/SignUpForm';
import reportWebVitals from './components/reportWebVitals';
import { AuthProvider } from "./components/AuthContext";
import {SignInLayout} from "./layouts/SignInLayout"; // Import the AuthProvider




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <SignInLayout>
            <SignUpForm page='signUp'/>
        </SignInLayout>
    </AuthProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
