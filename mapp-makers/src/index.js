import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpForm from './pages/Sign Up/SignUpForm';
import { AuthProvider } from "./firebase/AuthContext";
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

