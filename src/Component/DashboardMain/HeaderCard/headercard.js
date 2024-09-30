import React from 'react';
import './headercard.css';

const HeaderCards = () => {
  return (
    <div className="header-cards-container">
      <div className="header-card">
        <h3>Today Active Basic Plan Users</h3>
        <h2>721</h2>
        <span className="growth">+0.5%</span>
      </div>
      <div className="header-card">
        <h3>Today Active Standard Plan Users</h3>
        <h2>9000</h2>
        <span className="decline">-2.4%</span>
      </div>
      <div className="header-card">
        <h3>Today Active Premium Plan Users</h3>
        <h2>721</h2>
        <span className="growth">+1.2%</span>
      </div>
    </div>
  );
}

export default HeaderCards;
