import React from 'react';
import './recentcustomer.css';

const RecentCustomers = () => {
  const customers = [
    { name: 'Rahul Verma', plan: 'Premium Plan', amount: 2999 },
    { name: 'Bonaventure Single', plan: 'Standard Plan', amount: 1999 },
    { name: 'Marcos Khan', plan: 'Basic Plan', amount: 999 }
  ];

  return (
    <div className="recent-customers-container">
      <h3>Recent Customers</h3>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Subscription Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.plan}</td>
              <td>{customer.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentCustomers;
