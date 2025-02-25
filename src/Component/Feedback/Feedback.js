import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const users = [
    { name: 'Bhavesh Kumar', whatsapp: '+91 7690839130', alternate: '-', rating: 4, feedback: 'Enhance Personalization, Improve Performance', others: '', dateTime: '12-04-2024, 22:14' },
    { name: 'Ram Bandhu', whatsapp: '+91 8290839130', alternate: '+91 8290839130', rating: 3, feedback: 'Enhance Personalization, Improve Performance, Simplify Usability', others: 'Market Hub has streamlined...', dateTime: '30-12-2024, 14:27' },
  ];

  // State for search keyword and date filter
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Filter users based on search keyword and date
  const filteredUsers = users.filter(user => {
    const matchesKeyword =
      user.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.whatsapp.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.alternate.toLowerCase().includes(searchKeyword.toLowerCase());

    const matchesDate = selectedDate
      ? new Date(user.dateTime.split(',')[0].split('-').reverse().join('-')).toISOString().split('T')[0] === selectedDate
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