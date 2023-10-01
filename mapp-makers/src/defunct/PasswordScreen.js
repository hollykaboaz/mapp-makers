import React, { useState } from "react";
import Panel from "../Assets/Rectangle1.png"
import "./sidebar.css";

export const PasswordScreen = (props) => {
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pass);
    }

    return(
        <div className = "content">
            <body className = "password-container">
                <h2>Create an Account</h2>
                <form className="passwordForm" onSubmit={handleSubmit}>
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                    <button type="submit">Sign Up</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Don't already have an account? Register</button>
            </body>
            <div className = "sidebar">
                <img src={Panel} alt=""/>
            </div>
        </div>
    )
}