import React from 'react';
import './freeuser.css';
import action from '../../assets/action.png';
const UserList = () => {
  const users = [
    { name: 'Shivansh Kumar', phone: '7054378962', pincode: '400039', city: 'Mumbai', state: 'Maharashtra', startDate: '30-12-2024', plan: 'Premium Plan' },
    { name: 'Arush Saxena', phone: '7669876543', pincode: '122001', city: 'Gurgaon', state: 'Haryana', startDate: '29-12-2024', plan: 'Premium Plan' },
    { name: 'Manshrulesh Singh', phone: '8679987209', pincode: '700001', city: 'Kolkata', state: 'West Bengal', startDate: '29-12-2024', plan: 'Standard Plan' },
    { name: 'Jaisal Praneet Rao', phone: '9898234376', pincode: '600001', city: 'Chennai', state: 'Tamil Nadu', startDate: '29-12-2024', plan: 'Standard Plan' },
    { name: 'Parnell Rawat', phone: '9023365433', pincode: '400050', city: 'Kandivli', state: 'Maharashtra', startDate: '28-12-2024', plan: 'Basic Plan' },
    { name: 'Shivansh Kumar', phone: '7098765434', pincode: '600001', city: 'Mumbai', state: 'Tamil Nadu', startDate: '29-12-2024', plan: 'Standard Plan' },
    { name: 'Mohammed Singh', phone: '7090987432', pincode: '400050', city: 'Mumbai', state: 'Maharashtra', startDate: '28-12-2024', plan: 'Basic Plan' },
    { name: 'Manshrulesh Singh', phone: '7590987424', pincode: '400050', city: 'Mumbai', state: 'Maharashtra', startDate: '28-12-2024', plan: 'Basic Plan Expired' },
    { name: 'Harshil Rawat', phone: '8765432989', pincode: '452001', city: 'Indore', state: 'Madhya Pradesh', startDate: '29-12-2024', plan: 'Premium Plan' },
  ];

  return (
    <div className="page-wrapper">
      <div className="user-list-label">
        <h2>User List</h2>
      </div>
      <div className="user-list">
        <div className="user-list-header">
          <h2>Free Users</h2>
          <input type="text" placeholder="Search by name, phone..." className="freeuserlist-input" />
          <input type="date" className="freeuserlist-dateepicker" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone No</th>
              <th>Pincode</th>
              <th>City</th>
              <th>State</th>
              <th>Start Date</th>
              <th>Plan Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.pincode}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.startDate}</td>
                <td className={user.plan.toLowerCase().replace(/\s+/g, '-')}>{user.plan}</td>
                <td>
                
                  <button className="edit-button">
                    <img src={action} alt='editbutton'/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
