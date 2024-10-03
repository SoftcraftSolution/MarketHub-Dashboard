import React from 'react';
import './freetrial.css';
import actionimg from '../../assets/action.png';
import delimg from '../../assets/deleteimg.png';
import Pagination from '../Pagination'; 

const FreeTrial = () => {
  const users = [
    { name: 'Briavesh Kumar', phone: '7890378391', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Ram Bonchu', phone: '9838391010', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Mahanvash Singh', phone: '9983738938', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Enol Prasad Raj', phone: '7897878710', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Ponvil Padeh', phone: '7893940000', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Briavesh Kumar', phone: '7890378391', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Manoharan Singh', phone: '7983037838', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Hgovid Raj', phone: '9890080912', date: '30-01-2024',extendeddays: '12',expirydata: '01-01-2024' },
    { name: 'Ponvil Padeh', phone: '9983017382', date: '30-01-2024' ,extendeddays: '12',expirydata: '01-01-2024'}
  ];

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2 style={{margin: '0px'}}>Free Trial</h2>
        <input type="text" placeholder="Search by name, phone..." />
        <input type="date" className='datepick'/>
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
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>{user.extendeddays}</td>
              <td>{user.expirydata}</td>
              <td className='freetrial-buttons'>
                <button style={{border:'none',backgroundColor:'#FFFFFF'}}><img src={actionimg}/></button>
                <button style={{border:'none',backgroundColor:'#FFFFFF'}}><img src={delimg}/></button>
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
