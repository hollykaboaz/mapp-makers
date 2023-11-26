import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpForm from './pages/Sign Up/SignUpForm';
import {AuthProvider} from "./firebase/AuthContext";
import {SignInLayout} from "./layouts/SignInLayout";
import SignInForm from "./pages/Sign In/SignInForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import Student from "./pages/Student/Student";
import DashboardLayout from "./components/DashboardLayout";
import Class from "./pages/Class/Class";
import {AboutSection} from "./components/AboutSection"; // Import the AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
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
                    <Route path='/dashboard' element={
                        <DashboardLayout>
                            <Dashboard/>
                        </DashboardLayout>

                    }/>
                    <Route path='/student' element={
                        <Student/>
                    }/>
                    <Route path='/class' element={
                        <DashboardLayout>
                            <Class></Class>
                        </DashboardLayout>

                    }/>
                    <Route path='/about' element={
                        <SignInLayout page='about'>

                        <AboutSection/>
                        </SignInLayout>

                    }/>
                </Routes>
            </BrowserRouter>

        </AuthProvider>
    // </React.StrictMode>
);

