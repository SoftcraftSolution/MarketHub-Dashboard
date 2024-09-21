import './App.css';
import UserList from './Component/UserList/UserList'; // Correct the import path

function App() {
  return (
    <div className="App">
      {/* Remove the header section with logo and default content */}
      
      {/* Add the UserList component to be displayed */}
      <UserList />
    </div>
  );
}

export default App;
