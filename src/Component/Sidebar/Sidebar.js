import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../assets/mhublogo.png'; // Your logo image here
import homeimg from '../../assets/home.png';
import userimg from '../../assets/user.png';
import verimg from '../../assets/verify.png';
import newsimg from '../../assets/news.png';
import add from '../../assets/addadmin.png';
import downArrow from '../../assets/downarrow.png'; // Arrow images
import upArrow from '../../assets/uparrow.png'; // Arrow images

const Sidebar = () => {
  const [isUserListOpen, setIsUserListOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const toggleUserList = () => {
    setIsUserListOpen(!isUserListOpen);
  };

  const toggleNews = () => {
    setIsNewsOpen(!isNewsOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="sidebar-menu">
        <li>
          <a href="/dashboard">
            <img src={homeimg} alt="Dashboard Icon" className="icon" /> 
            Dashboard
          </a>
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
                <a href="/user-list/free-trial">Free Trial</a>
              </li>
              <li>
                <a href="/user-list/rejected">Rejected Users</a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="/verify-user">
            <img src={verimg} alt="Verify Icon" className="icon" /> 
            Verify User
          </a>
        </li>

        <li>
          <button className="menu-item" onClick={toggleNews}>
            <img src={newsimg} alt="News Icon" className="icon" /> 
            News
            <img src={isNewsOpen ? upArrow : downArrow} alt="Toggle" className="news-icon" />
          </button>
          {isNewsOpen && (
            <ul className="submenu">
              <li>
                <a href="/news/article-1">Article 1</a>
              </li>
              <li>
                <a href="/news/article-2">Article 2</a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="/add-admin">
            <img src={add} alt="Admin Icon" className="icon" /> 
            Add Admin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
