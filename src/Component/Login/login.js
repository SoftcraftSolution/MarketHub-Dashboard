import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../../assets/mhublogo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeepSignedInChange = (e) => {
    setKeepSignedIn(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://market-hub-backend-kappa.vercel.app/admin/login', {
        email: email,
        password: password,
      });
      
      // Store the JWT token
      const token = response.data.token;
      if (keepSignedIn) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      navigate('/'); 

    } catch (error) {
      console.error('Error during login:', error.response?.data || error);
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Handle "Forgot Password" link click
  const handleForgotPasswordClick = () => {
    navigate('/forgot'); // Navigate to Forgot Password page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2 className="newh2">Hello!</h2>
        <p className="newp">Log in to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          {error && <p className="error">{error}</p>}
          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={handleKeepSignedInChange}
              />
              Keep me signed in
            </label>
            {/* Forgot Password link that navigates to the Forgot Password page */}
            <span 
              className="forgot-password" 
              onClick={handleForgotPasswordClick} 
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Forgot Password?
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
