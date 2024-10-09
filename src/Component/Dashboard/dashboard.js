import React, { useState } from 'react';
import MainDashboard from '../DashboardMain/maindashboard.js';
import SpotPrice from '../SpotPrice/spotprice.js';
import VerifyUsers from '../VerifyUsers/verifyuser.js';
import FreeTrial from '../FreeTrial/freetrial.js';
import NewsPage from '../News/news.js';
import ExpiredTrial from '../ExpiredTrail/expiredtrial.js';
import RejectedUserTrial from '../RejectedUser/rejecteduser.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Topbar from '../TopBar/topbar.js'; // Import the Topbar component
import "./dashboard.css"; // Your CSS file for styling
import UserList from '../UserList/UserList.js';
import SelfNews from '../SelfNews/selfnews.js';
import CashManagement from '../CashManagement/cashmanagement.js';
import AdminDashboard from '../AddAdmin/addadmin.js';
import CircularNews from '../AddCircular/addcircular.js';
import FreeUser from '../FreeUser/freeuser.js';
import UserListPage from '../UserList/UserList.js';

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <MainDashboard />;
      case 1:
        return <UserListPage />;
      case 2:
        return <FreeTrial />;
      case 3:
        return <VerifyUsers />;
      case 4:
        return <SpotPrice />;
      case 5:
        return <NewsPage />;
      case 6:
        return <SelfNews />;
      case 7:
        return <CashManagement />;
      case 8:
        return <AdminDashboard />;
      case 9:
        return <CircularNews />;
      case 10:
        return <FreeTrial />;
      case 11:
        return <ExpiredTrial />;
      case 12:
        return <RejectedUserTrial />;
      case 13:
        return <FreeUser />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboarddd-container">
      <Sidebar activeIndex={activeIndex} onTabClick={handleTabClick} />
      <div className="main-content">
        <Topbar /> {/* Add the Topbar below the Sidebar */}
        <div className="home-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
