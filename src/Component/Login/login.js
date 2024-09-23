import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../../assets/mhublogo.png';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://market-hub-backend-kappa.vercel.app/admin/send-otp', {
        phoneNumber: phoneNumber
      });
      // Handle successful response
      console.log('OTP sent successfully:', response.data);

      // Navigate to /enterotp page after successful OTP request and pass the phoneNumber
      navigate('/enterotp', { state: { phoneNumber } });
    } catch (error) {
      // Handle error
      console.error('Error sending OTP:', error);
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2 className='newh2'>Hello!</h2>
        <p className='newp'>Log in to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending OTP...' : 'Get OTP'}
          </button>
          {error && <p className="error">{error}</p>}
          <div className="options">
            <label>
              <input type="checkbox" />
              Keep me signed in
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
