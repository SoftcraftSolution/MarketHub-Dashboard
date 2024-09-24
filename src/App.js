import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar/Sidebar'; // Adjust the import path as needed
import DashboardPage from './Component/UserList/UserList';
//import LoginPage from './Component/login/login';
import Login from './Component/Login/login';
import OtpPage from './Component/EnterOTP/enterotp';
import VerifyUsers from './Component/VerifyUsers/verifyuser';
import FreeTrial from './Component/FreeTrial/freetrial';
import NewsPage from './Component/News/news';
import Dashboard from './Component/Dashboard.js/dashboard';
import AdminDashboard from './Component/AddAdmin/addadmin';
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Render the Sidebar */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/userlist" element={<DashboardPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/enterotp" element={<OtpPage />} />
            <Route path="/verifyuser" element={<VerifyUsers />} />
            <Route path="/freetrial" element={<FreeTrial />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/addadmin" element={<AdminDashboard />} />
            {/* Add more routes here as needed */}
     
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
