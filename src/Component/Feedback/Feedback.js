import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feedback.css';

const Feedback = () => {
  const [users, setUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Fetch data from the API
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('https://api.markethubindia.com/user/get-all-feedback');
        const formattedData = response.data.map(item => ({
          name: item['Full Name'],
          whatsapp: item['WhatsApp No'],
          alternate: item['Alternate No'],
          rating: item['Rating'],
          feedback: item['Feedback'],
          others: item['Others'],
          dateTime: item['Date & Time']
        }));
        setUsers(formattedData);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchFeedback();
  }, []);

  // Filter users based on search keyword and date
  const filteredUsers = users.filter(user => {
    const matchesKeyword =
      user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.whatsapp.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.alternate.toLowerCase().includes(searchKeyword.toLowerCase());

    const matchesDate = selectedDate
      ? new Date(user.dateTime.split(',')[0].split('/').reverse().join('-')).toISOString().split('T')[0] === selectedDate
      : true;

    return matchesKeyword && matchesDate;
  });

  return (
    <div className='outer-layerfeedback'>
      <div style={{ fontWeight: "600", fontSize: "18px", paddingBottom: "10px" }}>FeedBack</div>
      <div className="feedback-page">
        <div className="filter-section">
          <div style={{ fontSize: "18px", fontWeight: "600" }}>Feedback</div>
          <input
            type="text"
            placeholder="Search by name, phone..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>WhatsApp No</th>
              <th>Alternate No</th>
              <th>Rating</th>
              <th>Feedback</th>
              <th>Others</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.whatsapp}</td>
                <td>{user.alternate}</td>
                <td>
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={i < user.rating ? 'heart-filled' : 'heart-empty'}>❤️</span>
                  ))}
                </td>
                <td>{user.feedback}</td>
                <td>{user.others}</td>
                <td>{user.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedback;