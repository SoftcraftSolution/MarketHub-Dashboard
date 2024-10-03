import React from 'react';
import './cashmanagement.css';
import Pagination from '../Pagination';

const CashManagement = () => {
  return (
    <div className="cash-management-container">
    <div className='divnew'>
      <div className='newnew'>Analytics Overview</div>  
      <div className="analytics-overview">
        <div className="analytics-card basic">
          <h2>8.4k</h2>
          <p>Basic Plan Revenue</p>
          <p className="increase">10% Increase from Last Month</p>
        </div>
        <div className="analytics-card standard">
          <h2>14.9k</h2>
          <p>Standard Plan Revenue</p>
          <p className="no-change">No Change from Last Month</p>
        </div>
        <div className="analytics-card premium">
          <h2>201.4k</h2>
          <p>Premium Plan Revenue</p>
          <p className="increase">3% Increase from Last Month</p>
        </div>
        <div className="analytics-card total">
          <h2>225.8k</h2>
          <p>Total Revenue</p>
          <p className="decrease">16% Decrease from Last Month</p>
        </div>
      </div>
    </div> 
      <div className="user-table">
        <div className="table-header">
          <div>All Users</div>
          <input type="text" placeholder="Search by name, phone..." />
          <input type="date" />
          <button className="filter-sort">Filter & Sort</button>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone No</th>
              <th>Subscription Type</th>
              <th>Subscription Date</th>
              <th>Payment Method</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bhavesh Kumar</td>
              <td>7690839130</td>
              <td className="premium-plan">Premium Plan</td>
              <td>12-03-2023</td>
              <td>UPI</td>
              <td>199</td>
            </tr>
            <tr>
              <td>Ram Bandhu</td>
              <td>8290839130</td>
              <td className="standard-plan">Standard Plan</td>
              <td>12-03-2023</td>
              <td>UPI</td>
              <td>199</td>
            </tr>
            <tr>
              <td>Manmohan Singh</td>
              <td>7890987680</td>
              <td className="premium-plan">Premium Plan</td>
              <td>12-03-2023</td>
              <td>UPI</td>
              <td>199</td>
            </tr>
            <tr>
              <td>Ekal Prasad Raj</td>
              <td>7690839130</td>
              <td className="standard-plan">Standard Plan</td>
              <td>12-03-2023</td>
              <td>UPI</td>
              <td>199</td>
            </tr>
            <tr>
              <td>Parvati Rakesh</td>
              <td>8290839130</td>
              <td className="basic-plan">Basic Plan</td>
              <td>12-03-2023</td>
              <td>UPI</td>
              <td>199</td>
            </tr>
            <tr>
              <td>Parvati Rakesh</td>
              <td>8290839130</td>
              <td className="basic-plan">Basic Plan</td>
              <td>12-03-2023</td>
              <td>UPI</td>
              <td>199</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <Pagination />
    </div>
  );
};

export default CashManagement;
