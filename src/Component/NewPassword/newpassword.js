import React, { useState } from 'react';
import './newpassword.css';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // Handle the password reset logic here
      console.log('New password set:', password);
    }
  };

  return (
    <div className="new-password-container">
      <div className="new-password-box">
        <h2>New Password</h2>
        <p>Create a New password and Confirm Password</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="input-field"
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit" className="submit-btn">Continue</button>
        </form>
        <a href="/" className="back-link">Back</a>
      </div>
    </div>
  );
};

export default NewPassword;
