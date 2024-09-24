import React from 'react';
import './expiredtrial.css';  // Import the CSS file for styling
import actionImg from '../../assets/action.png';  // Placeholder image for action button

const ExpiredTrial = () => {
  const users = [
    { name: 'Bhavesh Kumar', phone: '7690839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '0' },
    { name: 'Ram Bandhu', phone: '8290839130', subscriptionDate: '30-12-2024', expirationDate: '30-12-2024', extendedDays: '3' },
    { name: 'Manmohan Singh', phone: '7890878780', subscriptionDate: '12-09-2024', expirationDate: '19-09-2024', extendedDays: '5' },
    { name: 'Ekal Prasad Raj', phone: '7690839130', subscriptionDate: '29-11-2024', expirationDate: '06-12-2024', extendedDays: '7' },
    { name: 'Parvati Rakesh', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '9' },
    { name: 'Ankit sharma', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '9' },
    { name: 'Gaurav prajapati', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '9' },
    { name: 'karan nair', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '9' },
    { name: 'Rohit singh ', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '9' },
    { name: 'Sumit jha', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '17' },
    { name: 'Aditya singh', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '13' },
    { name: 'Chandan pal', phone: '8290839130', subscriptionDate: '12-04-2024', expirationDate: '19-04-2024', extendedDays: '11' },
  ];

  return (
    <div className="expired-container">
      <div className="expired-header">
        <h3 className="expired-title">ExpiredTrail</h3>
        <div className="expired-search">
          <input type="text" placeholder="Search by name, phone..." className="expired-input" />
          <input type="date" className="expired-datepicker" />
        </div>
      </div>

      <table className="expired-table">
        <thead className="expired-thead">
          <tr>
            <th className="expired-th">Full Name</th>
            <th className="expired-th">Phone No</th>
            <th className="expired-th">Subscription Date</th>
            <th className="expired-th">Expiration Date</th>
            <th className="expired-th">Extended Days</th>
            <th className="expired-th">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="expired-row">
              <td className="expired-td">{user.name}</td>
              <td className="expired-td">{user.phone}</td>
              <td className="expired-td">{user.subscriptionDate}</td>
              <td className="expired-td">{user.expirationDate}</td>
              <td className="expired-td">{user.extendedDays}</td>
              <td className="expired-td">
                <button className="expired-action-btn">
                  <img src={actionImg} alt="Action" className="expired-action-img" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpiredTrial;
