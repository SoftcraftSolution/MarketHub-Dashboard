import React from 'react';
import './VerifySpot.css'; // External CSS for this component
import filter from '../../../assets/filter.png';
import tick from '../../../assets/tickimg.png';
import untic from '../../../assets/dontverify.png';

const userData = [
  {
    postedBy: 'Bhavesh Kumar',
    commodity: 'Steel Ingot',
    city: 'Mumbai',
    country: 'India',
    previousAmt: '1800',
    currentAmt: '1800',
    dateTime: '12-04-2024, 22:14',
  },
  {
    postedBy: 'Ram Bandhu',
    commodity: 'Armature',
    city: 'Nairobi',
    country: 'Kenya',
    previousAmt: '23,000',
    currentAmt: '22,890',
    dateTime: '30-12-2024, 14:27',
  },
  // Add more user data here as needed
];

const VerifyUsersTable = () => {
  return (
    <div className="spotverify-users">
      <div className='spotverifyheadingfunctions'>
        <div className='spotverifytitle'>Verify Users</div>
        <div className="spotverifytable-controls">
          <input type="text" placeholder="Search by name, phone..." className="spotverify-input" />
          <button style={{ border: "none", backgroundColor: "#FFFFFF", paddingLeft: "20px" }}>
            <img src={filter} alt="filter" />
          </button>
        </div>
      </div>
      <table className='spotverifytable'>
        <thead>
          <tr>
            <th className='spotverifyheading'>Posted by</th>
            <th className='spotverifyheading'>Commodity</th>
            <th className='spotverifyheading'>City</th>
            <th className='spotverifyheading'>Country</th>
            <th className='spotverifyheading'>Previous Amt</th>
            <th className='spotverifyheading'>Current Amt</th>
            <th className='spotverifyheading'>Date & Time</th>
            <th className='spotverifyheading'>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td className='spotverifydata'>{user.postedBy}</td>
              <td className='spotverifydata'>{user.commodity}</td>
              <td className='spotverifydata'>{user.city}</td>
              <td className='spotverifydata'>{user.country}</td>
              <td className='spotverifydata'>{user.previousAmt}</td>
              <td className='spotverifydata'>{user.currentAmt}</td>
              <td className='spotverifydata'>{user.dateTime}</td>
              <td className='spotverifydata'>
                <button style={{border:"none",backgroundColor:"#FFFFFF"}}><img src={tick} alt='tick' /></button>
                <button style={{border:"none",backgroundColor:"#FFFFFF"}}><img src={untic} alt='deny' /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerifyUsersTable;
