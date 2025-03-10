import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './rejecteduser.css';  // Import the CSS file for styling
import delimg from '../../assets/deleteimg.png';  // Placeholder image for action button

const RejectedUserTrial = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [searchKeyword, setSearchKeyword] = useState(''); // State for search keyword
  const [selectedDate, setSelectedDate] = useState(''); // State for date filter

  useEffect(() => {
    // Fetch rejected users from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.markethubindia.com/user/rejected-user-list');
        if (response.data.success) {
          setUsers(response.data.data); // Set the users in state
        }
      } catch (error) {
        console.error('Error fetching the rejected users:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search keyword and selected date
  const filteredUsers = users.filter(user => {
    const matchesSearchKeyword = user.fullName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                                 user.whatsappNumber.includes(searchKeyword) ||
                                 user.phoneNumber.includes(searchKeyword);
    const matchesDate = selectedDate ? new Date(user.rejectionDate).toLocaleDateString() === new Date(selectedDate).toLocaleDateString() : true;
    return matchesSearchKeyword && matchesDate;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="expired-container">
      <div className='pagetitle'>Users List</div>
      <div className='tablebg'>  
        <div className="expired-header">
          <h3 className="expired-title">Rejected Users</h3>
          <div className="expired-search">
            <input
              type="text"
              placeholder="Search by name, phone..."
              className="expired-input"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)} // Update search keyword state
            />
            <input
              type="date"
              className="expired-datepicker"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)} // Update selected date state
            />
          </div>
        </div>

        <table className="expired-table">
          <thead className="expired-thead">
            <tr>
              <th className="expired-th">Full Name</th>
              <th className="expired-th">WhatsApp No</th>
              <th className="expired-th">Alternate No</th>
              <th className="expired-th">Pin Code</th>
              <th className="expired-th">City</th>
              <th className="expired-th">State</th>
              <th className="expired-th">Plan Start Date</th>
              <th className="expired-th">Rejection Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="expired-row">
                <td className="expired-td">{user.fullName}</td>
                <td className="expired-td">{user.whatsappNumber}</td>
                <td className="expired-td">{user.phoneNumber}</td>
                <td className="expired-td">{user.pincode}</td>
                <td className="expired-td">{user.city}</td>
                <td className="expired-td">{user.state}</td>
                <td className="expired-td">{new Date(user.planStartDate).toLocaleDateString()}</td>
                <td className="expired-td">{new Date(user.rejectionDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
    </div>
  );
};

export default RejectedUserTrial;