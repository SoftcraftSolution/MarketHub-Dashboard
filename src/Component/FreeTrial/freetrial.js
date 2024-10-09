import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './freetrial.css';
import actionimg from '../../assets/action.png';
import delimg from '../../assets/deleteimg.png';
import Pagination from '../Pagination';

const FreeTrial = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchFreeTrialUsers = async () => {
      try {
        const response = await axios.get('https://market-hub-backend-kappa.vercel.app/user/free-trail-user-list');
        if (response.data.success) {
          // Filter users where isInTrial is true
          const trialUsers = response.data.data.filter(user => user.isInTrail);
          setUsers(trialUsers);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchFreeTrialUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2 style={{ margin: '0px' }}>Free Trial</h2>
        <input type="text" placeholder="Search by name, phone..." className="freetrial-input" />
        <input type="date" className="freetrial-datepicker" />
      </div>

      <table className="user-list-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone No</th>
            <th>Start Date</th>
            <th>Extended Days</th>
            <th>Expiration Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.phoneNumber}</td>
              <td>{new Date(user.planStartDate).toLocaleDateString()}</td>
              <td>{user.extendendDays}</td>
              <td>{new Date(user.planEndDate).toLocaleDateString()}</td>
              <td className='freetrial-buttons'>
                <button style={{ border: 'none', backgroundColor: '#FFFFFF' }}><img src={actionimg} alt="action"/></button>
                <button style={{ border: 'none', backgroundColor: '#FFFFFF' }}><img src={delimg} alt="delete"/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default FreeTrial;
