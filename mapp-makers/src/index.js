import React from 'react';
import App from './components/App'
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpForm from './pages/Sign Up/SignUpForm';
import {AuthProvider} from "./firebase/AuthContext";
import {SignInLayout} from "./layouts/SignInLayout";
import SignInForm from "./pages/Sign In/SignInForm"; // Import the AuthProvider
import {DashBoard} from "./pages/Dashboard/DashBoard";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/signup' element={
                        <SignInLayout page='signUp'>
                            <SignUpForm/>
                        </SignInLayout>
                    }/>
                    <Route path='/' element={
                        <SignInLayout page='signIn'>
                          <SignInForm/>
                        </SignInLayout>
                    }/>
                    <Route path='/Dashboard' element={// to be added to dashboard
                    <DashBoard/>
                    }/>
                    
                </Routes>
            </BrowserRouter>

        </AuthProvider>
    </React.StrictMode>,
);

