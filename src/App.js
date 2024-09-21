import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar/Sidebar'; // Adjust the import path as needed
import DashboardPage from './Component/UserList/UserList';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar /> {/* Render the Sidebar */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/userlist" element={<DashboardPage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
