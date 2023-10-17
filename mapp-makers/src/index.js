import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpForm from './pages/Sign Up/SignUpForm';
import {AuthProvider} from "./firebase/AuthContext";
import {SignInLayout} from "./layouts/SignInLayout";
import SignInForm from "./pages/Sign In/SignInForm"; // Import the AuthProvider
import AddStudentPage from './pages/addStudentPage';

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
                    <Route path='/add-student' element={ //to be added, layout for addpi
                        <AddStudentPage />
                    }/>
                </Routes>
            </BrowserRouter>

        </AuthProvider>
    </React.StrictMode>,
);

