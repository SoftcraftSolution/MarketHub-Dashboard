import React, { useState } from 'react';
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
import cash from '../../assets/cash.png';
import spot from '../../assets/spot.png';

const Sidebar = ({ activeIndex, onTabClick }) => {
  const navigate = useNavigate();
  const [isUserListOpen, setIsUserListOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isSpotOpen, setIsSpotOpen] = useState(false);
  const toggleUserList = () => {
    setIsUserListOpen(!isUserListOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="sidebar-menu">
        <li>
        <a
           
            className={`menu-item ${activeIndex === 0 ? 'active' : 'inactive'}`}
            onClick={() => onTabClick(0)}
          >
            <img src={homeimg} alt="Dashboard Icon" className="icon" />
            Dashboard
          </a>
        </li>



        <li>
          <button
            className={`menu-item ${activeIndex === 1 ? 'active' : 'inactive'}`}
            onClick={() => {
              toggleUserList();
              onTabClick(1);
            }}
          >
            <img src={userimg} alt="User List Icon" className="icon" />
           <div> User List</div>
            <img
              src={isUserListOpen ? upArrow : downArrow}
              alt="Toggle"
              className="arrow-icon"
            />
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
          <Link
            to="/verify-user"
            className={`menu-item ${activeIndex === 2 ? 'active' : 'inactive'}`}
            onClick={() => onTabClick(2)}
          >
            <img src={verimg} alt="Verify Icon" className="icon" />
            Verify User
          </Link>
        </li>

        <li>
          <button
            className={`menu-item ${activeIndex === 3 ? 'active' : 'inactive'}`}
            onClick={() => {
              setIsSpotOpen(!isSpotOpen);
              onTabClick(3);
            }}
          >
            <img src={spot} alt="News Icon" className="icon" />
            Spot Price
            <img
              src={isSpotOpen ? upArrow : downArrow}
              alt="Toggle"
              className="news-icon"
            />
          </button>
          {isSpotOpen && (
            <ul className="submenu">
              <li>
                <Link to="/news/Add Self News">Add Spot Price</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <button
            className={`menu-item ${activeIndex === 4 ? 'active' : 'inactive'}`}
            onClick={() => {
              setIsNewsOpen(!isNewsOpen);
              onTabClick(4);
            }}
          >
            <img src={newsimg} alt="News Icon" className="icon" />
            News
            <img
              src={isNewsOpen ? upArrow : downArrow}
              alt="Toggle"
              className="news-icon"
            />
          </button>
          {isNewsOpen && (
            <ul className="submenu">
              <li>
                <Link to="/news/Add Self News">Add Self News</Link>
              </li>
              <li>
                <Link to="/news/article-2">Add Circular News</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/add-admin"
            className={`menu-item ${activeIndex === 5 ? 'active' : 'inactive'}`}
            onClick={() => onTabClick(5)}
          >
            <img src={cash} alt="Admin Icon" className="icon" />
            Cash Management
          </Link>
        </li>             

        <li>
          <Link
            to="/add-admin"
            className={`menu-item ${activeIndex === 6 ? 'active' : 'inactive'}`}
            onClick={() => onTabClick(6)}
          >
            <img src={add} alt="Admin Icon" className="icon" />
            Add Admin
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;