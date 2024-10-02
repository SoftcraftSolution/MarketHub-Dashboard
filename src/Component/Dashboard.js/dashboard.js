import React, { useState } from 'react';




import "./dashboard.css" // Your CSS file for styling
import VerifyUsers from '../VerifyUsers/verifyuser.js';
import FreeTrial from '../FreeTrial/freetrial.js';
import NewsPage from '../News/news.js';
import RejectedUserTrial from '../RejectedUser/rejecteduser.js';
import Sidebar from '../Sidebar/Sidebar.js';


const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
      setActiveIndex(index);
    };
  
    const renderContent = () => {
      switch (activeIndex) {
        case 0:
          return <RejectedUserTrial />;
        case 1:
          return <VerifyUsers />;
        case 2:
          return < FreeTrial/>;
          case 3:
            return <VerifyUsers/>
        default:
          return null;
      }
    };
  
    return (
      <div className='-dashboard'>
        <Sidebar activeIndex={activeIndex} onTabClick={handleTabClick} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    );
};

export default Dashboard;
