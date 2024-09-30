import React, { useState } from 'react';
import './forgotpassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the password reset logic here, like sending a reset email.
    console.log("Email for password reset:", email);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
       <div className='forgot-line'>
        <h2>Forgot Password ?</h2>
        <p>Enter your email to reset your password.</p>
        </div>  
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="input-field"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className="submit-btn">Continue</button>
        </form>
        <a href="/" className="back-link">Back</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
