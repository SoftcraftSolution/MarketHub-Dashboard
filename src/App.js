import './App.css';
import UserList from './Component/UserList/UserList'; // Correct the import path
import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Remove the header section with logo and default content */}
      
      {/* Add the UserList component to be displayed */}
      <UserList />
      {/* Sidebar component */}
      <Sidebar />
    </div>
  );
}

export default App;
