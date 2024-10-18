import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const toggleNewsList = () => {
    setIsNewsOpen(!isNewsOpen);
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
            <div>User List</div>
            
            <img
              src={isUserListOpen ? upArrow : downArrow}
              alt="Toggle"
              className="arrow-icon"
            />
          </button>
          
          <ul className={`submenu ${isUserListOpen ? 'submenu-open' : ''}`}>
              <li>
                <Link
                  className={`submenu-item ${activeIndex === 11 ? 'active' : 'inactive'}`}
                  onClick={() => onTabClick(11)}
                >
                  Free Trial
                </Link>
              </li>
              <li>
                <Link
                  className={`submenu-item ${activeIndex === 12 ? 'active' : 'inactive'}`}
                  onClick={() => onTabClick(12)}
                >
                  Expired Trial
                </Link>
              </li>
              <li>
                <Link
                  className={`submenu-item ${activeIndex === 13 ? 'active' : 'inactive'}`}
                  onClick={() => onTabClick(13)}
                >
                  Rejected Users
                </Link>
              </li>
              <li>
                <Link
                  className={`submenu-item ${activeIndex === 14 ? 'active' : 'inactive'}`}
                  onClick={() => onTabClick(14)}
                >
                  Free Users
                </Link>
              </li>
            </ul>
        </li>

        <li>
          <Link
            className={`menu-item ${activeIndex === 3 ? 'active' : 'inactive'}`}
            onClick={() => onTabClick(3)}
          >
            <img src={verimg} alt="Verify Icon" className="icon" />
            Verify User
          </Link>
        </li>

        <li>
          <button
            className={`menu-item ${activeIndex === 4 ? 'active' : 'inactive'}`}
            onClick={() => {
              setIsSpotOpen(!isSpotOpen);
              onTabClick(4);
            }}
          >
            <img src={spot} alt="Spot Price Icon" className="icon" />
            Spot Price
          </button>
          <ul className={`submenu ${isSpotOpen ? 'submenu-open' : ''}`}>
              <li>
              <Link
                  className={`submenu-item ${activeIndex === 5 ? 'active' : 'inactive'}`}
                  onClick={() => onTabClick(5)}
                >
                  Add Spot Price
                </Link>
              </li>
            </ul>
        </li>

        <li>
          <button
            className={`menu-item ${activeIndex === 6 ? 'active' : 'inactive'}`}
            onClick={() => {
              toggleNewsList();
              onTabClick(6);
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
          <ul className={`submenu ${isNewsOpen ? 'submenu-open' : ''}`}>
              <li>
                <Link
                  className={`submenu-item ${activeIndex === 7 ? 'active' : 'inactive'}`}
                  onClick={() => onTabClick(7)}
                >
                  Add Self News
                </Link>
              </li>
              <li>
                <Link
                  className={`submenu-item ${activeIndex === 10 ? 'active' : 'inactive'}`}
                  onClick={() => onTabClick(10)}
                >
                  Add Circular
                </Link>
              </li>
            </ul>
        </li>

        <li>
          <Link
            className={`menu-item ${activeIndex === 8 ? 'active' : 'inactive'}`}
            onClick={() => onTabClick(8)}
          >
            <img src={cash} alt="Cash Management Icon" className="icon" />
            Cash Management
          </Link>
        </li>             

        <li>
          <Link
            className={`menu-item ${activeIndex === 9 ? 'active' : 'inactive'}`}
            onClick={() => onTabClick(9)}
          >
            <img src={add} alt="Add Admin Icon" className="icon" />
            Add Admin
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
