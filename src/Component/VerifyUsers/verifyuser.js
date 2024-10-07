
import './verifyuser.css'; // Import external CSS
import filterimg from '../../assets/filter.png';
import tickimg from '../../assets/tickimg.png';
import delimg from '../../assets/removeimg.png';
import React, { useState, useEffect } from 'react';
import visitcard from '../../assets/visitcard.png'
import Pagination from '../Pagination'; 

function VerifyUsers() {
  const users = [
    {
      name: 'Bhavesh Kumar',
      phone: '7838392384',
      pincode: '400089',
      city: 'Mumbai',
      state: 'Maharashtra',
      visitingCard: visitcard, // Image path or URL
      dateTime: '30-Sep-2024, 10:23',
    },
    {
      name: 'Ravi Sandeep',
      phone: '7859923183',
      pincode: '400020',
      city: 'Gurgaon',
      state: 'Haryana',
      visitingCard: visitcard,
      dateTime: '29-Sep-2024, 14:55',
    },
    {
      name: 'Mumtaz Singh',
      phone: '7894932883',
      pincode: '400200',
      city: 'Kolkata',
      state: 'West Bengal',
      visitingCard: '',
      dateTime: '28-Sep-2024, 11:40',
    },
    {
      name: 'Gauri Prashad',
      phone: '9857292345',
      pincode: '600023',
      city: 'Chennai',
      state: 'Tamil Nadu',
      visitingCard: visitcard,
      dateTime: '29-Sep-2024, 15:15',
    },
    {
      name: 'Poonam Kaleesh',
      phone: '9948482323',
      pincode: '700029',
      city: 'Vizag',
      state: 'Andhra Pradesh',
      visitingCard: '', // No card available
      dateTime: '30-Sep-2024, 12:00',
    },
    {
      name: 'Bhavesh Kumar',
      phone: '7838392384',
      pincode: '400089',
      city: 'Madurai',
      state: 'Tamil Nadu',
      visitingCard: visitcard,
      dateTime: '30-Sep-2024, 14:45',
    },
  ];
  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    console.log(date);
  };

  const getStringDate = (date) => {
    // Ensure date is a Date object
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }
  }
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="verify-users-container">
      <h2 className='verify-heading'>Verify Users</h2>


    <div className="table-container">
      <div className="top-bar">
        <div style={{paddingTop:'10px',fontSize:"16px",fontWeight:"600"}}>Verify Users</div>
        <div className="verify-search">
          <input type="text" placeholder="Search by name, phone..." className="expired-input" />
        </div>
        <button className="filter-btn">
          <img src={filterimg} alt="filter" />  
        </button>
      </div>

  
        <table className="users-table">
          <thead>
            <tr>
            <th>Action</th>
              <th>Full Name</th>
              <th>Phone No</th>
              <th>Pincode</th>
              <th>City</th>
              <th>State</th>
              <th>Visiting Card</th>
              <th>Date & Time</th>
            
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
               <td className='buttonsverify'>
                  <button className="edit-btn"><img src={tickimg}/></button>
                  <button className="delete-btn"><img src={delimg}/></button>
                </td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.pincode}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>
                  {user.visitingCard ? (
                    <img src={user.visitingCard} alt="Visiting Card" className="visiting-card" />
                  ) : (
                    <span>-</span>
                  )}
                </td>
                <td>{user.dateTime}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}

export default VerifyUsers;
