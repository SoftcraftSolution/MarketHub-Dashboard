import React, { useState } from 'react';
import SpotPrice from '../SpotPrice/spotprice.js';
import Sidebar from '../Sidebar/Sidebar.js';
import "./dashboard.css" // Your CSS file for styling
import VerifyUsers from '../VerifyUsers/verifyuser.js';
import FreeTrial from '../FreeTrial/freetrial.js';
import Notification from '../Notification/notification.js'
import MainDashboard from '../DashboardMain/maindashboard.js';



const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
      setActiveIndex(index);
    };
  
    const renderContent = () => {
      switch (activeIndex) {
        case 0:
          return<VerifyUsers />;
          
        case 1:
          return <Notification />;
        case 2:
          return < FreeTrial/>;
          case 3:
            return <VerifyUsers/>
        default:
          return null;
      }
    };
  
    return (
      <div className='home-dash'>
        <Sidebar activeIndex={activeIndex} onTabClick={handleTabClick} />
        <div className="dash-content">
          {renderContent()}
        </div>
      </div>
    );
};

export default Dashboard;