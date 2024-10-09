import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './expiredtrial.css'; // Import the CSS file for styling
import actionImg from '../../assets/action.png'; // Placeholder image for action button
import deleteimg from '../../assets/deleteimg.png';
import Pagination from '../Pagination';

const ExpiredTrial = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error

  useEffect(() => {
    const fetchExpiredUsers = async () => {
      try {
        const response = await axios.get('https://market-hub-backend-kappa.vercel.app/user/expired-trail-user-list');
        if (response.data.success) {
          const expiredUsers = response.data.data.filter(user => new Date(user.planEndDate) < new Date());
          setUsers(expiredUsers); // Set the expired users in state
        } else {
          setError('Failed to fetch users');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchExpiredUsers();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading indicator while fetching data
  if (error) return <div>{error}</div>; // Show error message if there's an error

  return (
    <div className='expired-root-container'>
      <div className="expired-title-top">Users List</div>
      <div className="expireddd-container">
        <div className="expired-header">
          <div className="expired-title">Expired Trial</div>
          <div className="expired-search">
            <input type="text" placeholder="Search by name, phone..." className="expired-input" />
            <input type="date" className="expired-datepicker" />
          </div>
        </div>

        <table className="expired-table">
          <thead className="expired-thead">
            <tr>
              <th className="expired-th" id='headingexpired'>Full Name</th>
              <th className="expired-th" id='headingexpired'>Phone No</th>
              <th className="expired-th" id='headingexpired'>Start Date</th>
              <th className="expired-th" id='headingexpired'>Expiration Date</th>
              <th className="expired-th" id='headingexpired'>Extended Days</th>
              <th className="expired-th" id='headingexpired'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="expired-row">
                <td className="expired-td">{user.fullName}</td>
                <td className="expired-td">{user.phoneNumber}</td>
                <td className="expired-td">{new Date(user.planStartDate).toLocaleDateString()}</td>
                <td className="expired-td">{new Date(user.planEndDate).toLocaleDateString()}</td>
                <td className="expired-td">{user.extendendDays}</td>
                <td className="expired-td" id="expired-buttons">
                  <button className="expired-action-btn">
                    <img src={actionImg} alt="Action" className="expired-action-img" />
                  </button>
                  <button className="expired-action-btn">
                    <img src={deleteimg} alt="Action" className="expired-action-img" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default ExpiredTrial;
