import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./enterotp.css";
import "@fontsource/poppins";

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // React Router hook to get location
  const phoneNumber = location.state?.phoneNumber; // Retrieve phoneNumber from state

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://market-hub-backend-kappa.vercel.app/admin/verify-otp', {
        otp: otp,
        phoneNumber: phoneNumber 
      });
      
     
      console.log('OTP verified successfully:', response.data);
      
      
      navigate('/userlist');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2 className="otp-title">Enter OTP</h2>
        <p>An OTP has been sent to your Email Address</p>
        <input
          type="text"
          className="otp-input"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
        />
        <button className="otp-button" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Verifying...' : 'Continue'}
        </button>
        {error && <p className="error">{error}</p>}
        <div className="otp-back">Back</div>
      </div>
    </div>
  );
};

export default OtpPage;
