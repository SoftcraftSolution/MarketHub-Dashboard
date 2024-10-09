// TableComponent.js
import React from "react";
import './Table.css';

const TableComponent = () => {
  const users = [
    { name: "Bhavesh Kumar", whatsapp: "+91 7699828380", city: "Mumbai", state: "Maharashtra", country: "India", plan: "Free Trial" },
    { name: "Ram bendru", whatsapp: "+91 8750021632", city: "Gurgaon", state: "Haryana", country: "India", plan: "Standard Plan" },
    // ...add more user data here
  ];

  return (
    <div className="userlisttable-container">
       <div className="usertablehead">
        <div>All Users</div>
        
          <input type="text" placeholder="Search by name, phone..." className="usertable-input" />
          <div id="userlistdatteePickeer">
              <input type="date" id="birthday" name="birthday" className="date-picker-input"  />
            </div>
          

        </div> 
      <table className="userlisttable">
        <thead>
          <tr>
            <th className="userlisthead">Full Name</th>
            <th className="userlisthead">WhatsApp No</th>
            <th className="userlisthead">City</th>
            <th className="userlisthead">State</th>
            <th className="userlisthead">Country</th>
            <th className="userlisthead">Plan</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="userlistdata">{user.name}</td>
              <td className="userlistdata">{user.whatsapp}</td>
              <td className="userlistdata">{user.city}</td>
              <td className="userlistdata">{user.state}</td>
              <td className="userlistdata">{user.country}</td>
              <td className="userlistdata">{user.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
