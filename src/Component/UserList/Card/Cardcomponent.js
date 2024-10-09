// CardsComponent.js
import React from "react";
import './Cardcomponent.css';
import userIcon from '../../../assets/iconfornews.png'; // Adjust the path to your image

const CardsComponent = () => {
  const cardsData = [
    { title: "Total Users", count: 16689, className: "total-users" },
    { title: "Free Trial Users", count: 10293, className: "free-trial" },
    { title: "Subscribed Users", count: 4279, className: "subscribed" },
    { title: "Rejected Users", count: 2040, className: "rejected" }
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className={`card ${card.className}`}>
          <div className="card-icon-container">
            <img src={userIcon} alt={card.title} className="card-icon" />
          </div>
          <div className="card-info">
          <p>{card.title}</p>
            <h3>{card.count.toLocaleString()}</h3>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
