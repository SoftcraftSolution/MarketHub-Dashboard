import React from 'react';
import './topbar.css';  // Import the external CSS
import pro from '../../assets/profile.png';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="notification-icon">
        <i className="fas fa-bell"></i>  {/* Font Awesome for bell icon */}
      </div>
      <div className="profile-icon">
        <img src={pro} alt="User Profile" />
      </div>
    </div>
  );
};

export default Topbar;
