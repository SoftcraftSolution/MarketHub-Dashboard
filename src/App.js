import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar/Sidebar'; // Adjust the import path as needed
import DashboardPage from './Component/UserList/UserList';
import Login from './Component/Login/login';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Render the Sidebar */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/userlist" element={<DashboardPage />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
