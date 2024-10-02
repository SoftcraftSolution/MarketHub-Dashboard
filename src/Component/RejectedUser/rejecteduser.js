import React from 'react';
import './rejecteduser.css';  // Import the CSS file for styling
import actionImg from '../../assets/action.png';  // Placeholder image for action button

const RejectedUserTrial = () => {
  const users = [
    { name: 'Bhavesh Kumar', phone: '7690839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
    { name: 'Ram Bandhu', phone: '8290839130',pincode:'400089',city:'Mumbai', state:'Maharashtra',subscriptionDate: '30-12-2024', rejectionDate: '30-12-2024', },
    { name: 'Manmohan Singh', phone: '7890878780',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-09-2024', rejectionDate: '19-09-2024', },
    { name: 'Ekal Prasad Raj', phone: '7690839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '29-11-2024', rejectionDate: '06-12-2024',},
    { name: 'Parvati Rakesh', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
    { name: 'Ankit sharma', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
    { name: 'Gaurav prajapati', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
    { name: 'karan nair', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
    { name: 'Rohit singh ', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024', },
    { name: 'Sumit jha', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
    { name: 'Aditya singh', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
    { name: 'Chandan pal', phone: '8290839130',pincode:'400089',city:'Mumbai',state:'Maharashtra', subscriptionDate: '12-04-2024', rejectionDate: '19-04-2024',},
  ];

  return (
    <div className="expired-container">
      <div className='pagetitle'>Users List</div>
    <div className='tablebg'>  
      <div className="expired-header">
        <h3 className="expired-title">Rejected Users</h3>
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
            <th className="expired-th">Pin Code</th>
            <th className="expired-th">City</th>
            <th className="expired-th">State</th>
            <th className="expired-th">Start Date</th>
            <th className="expired-th">Rejection Date</th>
            
            <th className="expired-th">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="expired-row">
              <td className="expired-td">{user.name}</td>
              <td className="expired-td">{user.phone}</td>
              <td className="expired-td">{user.pincode}</td>
              <td className="expired-td">{user.city}</td>
              <td className="expired-td">{user.state}</td>
              <td className="expired-td">{user.subscriptionDate}</td>
              <td className="expired-td">{user.rejectionDate}</td>

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
    </div>
  );
};

export default RejectedUserTrial;
