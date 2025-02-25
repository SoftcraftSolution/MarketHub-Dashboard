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
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchFreeTrialUsers = async () => {
      try {
        const response = await axios.get('https://api.markethubindia.com/user/free-trail-user-list');
        if (response.data.success) {
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

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUser) {
      try {
        await axios.delete(`https://markethub-app-backend.onrender.com/user/delete-user?email=${encodeURIComponent(selectedUser.email)}`);
        setUsers(users.filter(user => user._id !== selectedUser._id));
      } catch (error) {
        console.error('Error deleting user:', error);
      } finally {
        setShowDeletePopup(false);
        setSelectedUser(null);
      }
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearchKeyword = user.fullName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                                 user.phoneNumber.includes(searchKeyword);
    const matchesDate = selectedDate ? new Date(user.planStartDate).toLocaleDateString() === new Date(selectedDate).toLocaleDateString() : true;
    return matchesSearchKeyword && matchesDate;
  });

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
        <input 
          type="text" 
          placeholder="Search by name, phone..." 
          className="freetrial-input" 
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <input 
          type="date" 
          className="freetrial-datepicker" 
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
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
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.phoneNumber}</td>
              <td>{new Date(user.planStartDate).toLocaleDateString()}</td>
              <td>{user.extendendDays}</td>
              <td>{new Date(user.planEndDate).toLocaleDateString()}</td>
              <td className='freetrial-buttons'>
                <button 
                  style={{ border: 'none', backgroundColor: '#FFFFFF' }} 
                  onClick={() => handleDeleteClick(user)}
                >
                  <img src={delimg} alt="delete"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeletePopup && (
        <div className="delete-popup">
          <div className="delete-popup-content">
            <div className='freetrial-deletepopupheading'></div>
            <div>Are you sure you want to continue?</div>
            <div className="popup-actions">
              <button className="popup-button" onClick={() => setShowDeletePopup(false)}>No</button>
              <button className="popup-button popup-button-confirm" onClick={handleConfirmDelete}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeTrial;