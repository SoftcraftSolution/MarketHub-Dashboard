import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use Link for internal navigation and useNavigate for programmatic navigation
import './Sidebar.css';
import logo from '../../assets/mhublogo.png';
import homeimg from '../../assets/home.png';
import userimg from '../../assets/user.png';
import verimg from '../../assets/verify.png';
import newsimg from '../../assets/news.png';
import add from '../../assets/addadmin.png';
import downArrow from '../../assets/downarrow.png';
import upArrow from '../../assets/uparrow.png';

const Sidebar = () => {
  const navigate = useNavigate(); // Get navigate function for programmatic navigation
  const [isUserListOpen, setIsUserListOpen] = React.useState(false);
  const [isNewsOpen, setIsNewsOpen] = React.useState(false);

  const toggleUserList = () => {
    setIsUserListOpen(!isUserListOpen);
  };

  const navigateToUserList = () => {
    navigate('/userlist'); // Navigate to the User List page
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="sidebar-menu">
        <li>
          <Link to="/userlist">
            <img src={homeimg} alt="Dashboard Icon" className="icon" />
            Dashboard
          </Link>
        </li>

        <li>
          <button className="menu-item" onClick={toggleUserList}>
          
            <img src={userimg} alt="User List Icon" className="icon" />
            User List
            <img src={isUserListOpen ? upArrow : downArrow} alt="Toggle" className="arrow-icon" />
          </button>
          {isUserListOpen && (
            <ul className="submenu">
              <li>
                <Link to="/user-list/free-trial">Free Trial</Link>
              </li>
              <li>
                <Link to="/user-list/rejected">Rejected Users</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/verify-user">
            <img src={verimg} alt="Verify Icon" className="icon" />
            Verify User
          </Link>
        </li>

        <li>
          <button className="menu-item" onClick={() => setIsNewsOpen(!isNewsOpen)}>
            <img src={newsimg} alt="News Icon" className="icon" />
            News
            <img src={isNewsOpen ? upArrow : downArrow} alt="Toggle" className="news-icon" />
          </button>
          {isNewsOpen && (
            <ul className="submenu">
              <li>
                <Link to="/news/article-1">Article 1</Link>
              </li>
              <li>
                <Link to="/news/article-2">Article 2</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/add-admin">
            <img src={add} alt="Admin Icon" className="icon" />
            Add Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
