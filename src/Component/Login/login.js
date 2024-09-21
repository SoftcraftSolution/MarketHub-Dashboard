import React from 'react';
import './login.css';
import logo from '../../assets/mhublogo.png';


function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2>Hello!</h2>
        <p>Log in to continue.</p>
        <form>
          <input
            type="text"
            className="input-field"
            placeholder="Phone Number"
            required
          />
          <button type="submit" className="submit-btn">Get OTP</button>
          <div className="options">
            <label>
              <input type="checkbox" />
              Keep me signed in
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
