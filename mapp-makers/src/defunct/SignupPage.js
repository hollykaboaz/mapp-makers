import React, { Component } from 'react';


class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNext = () => {
    if (this.state.step === 1) 
    {
      this.setState({ step: 2 });
    } 
    else 
    {
      // In a real application, you'd handle form submission here.
      // For this example, we'll just log the email and password.
      console.log('Email:', this.state.email);
      console.log('Password:', this.state.password);
    }
  };

  render() 
  {
    const { step, email, password } = this.state;

    return (
      <div className="signup-container">
        <div className="signup-box">
          <h2>Create an Account</h2>
          <div className="steps">
            <span className={step === 1 ? 'active' : 'inactive'}>1</span> / Email
            <span className={step === 2 ? 'active' : 'inactive'}>2</span> / Password
          </div>
          {step === 1 && (
            <div className="email-panel">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleInputChange}
              />
              <div className="recaptcha">
                <input type="checkbox" />
                <label>Recaptcha</label>
              </div>
              <button onClick={this.handleNext}>Next</button>
            </div>
          )}
          {step === 2 && (
            <div className="password-panel">
              <input
                type="password"
                name="password"
                placeholder="Password (6 characters min)"
                value={password}
                onChange={this.handleInputChange}
              />
              <button>Show</button>
              <button onClick={this.handleNext}>Sign Up</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SignupPage;
