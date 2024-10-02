import React from 'react';
import HeaderCards from './HeaderCard/headercard';
import TotalRevenueChart from './TotalRevenue/totalrevenue';
import RecentCustomers from './RecentCustomer/recentcustomer';
import MostBoughtPlans from './MostBought/mostbought';
import RecentNotifications from './RecentNotification/recentnotification';
import './maindash.css';
import Card from './HeaderCard/headercard';

const MainDashboard = () => {
  return (
   <div className='main-dash-root'>
    <div id="dash-header">DashBorad</div>
    <div id="dash-first">
    <Card 
        title="Basic Plan" 
        count={721} 
        percentageGrowth={4.8} 
        color="#2B2EE9" 
        graphColor="#2B2EE9" 
      />
      <Card 
        title="Standard Plan" 
        count={9000} 
        percentageGrowth={-4.8} 
        color="#FF8A00" 
        graphColor="#FF8A00" 
      />
      <Card 
        title="Premium Plan" 
        count={721} 
        percentageGrowth={4.8} 
        color="#00B74A" 
        graphColor="#00B74A" 
      />
    </div>
   </div>
  );
}

export default MainDashboard;
