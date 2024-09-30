import React from 'react';
import HeaderCards from './HeaderCard/headercard';
import TotalRevenueChart from './TotalRevenue/totalrevenue';
import RecentCustomers from './RecentCustomer/recentcustomer';
import MostBoughtPlans from './MostBought/mostbought';
import RecentNotifications from './RecentNotification/recentnotification';
import './maindash.css';

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header-cards">
        <HeaderCards />
      </div>
      <div className="main-content">
        <div className="chart-section">
          <TotalRevenueChart />
        </div>
        <div className="tables-section">
          <RecentCustomers />
         
        </div>
        <div>
        <MostBoughtPlans />
        </div>
        <div className="notifications-section">
          <RecentNotifications />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
