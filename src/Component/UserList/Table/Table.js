import React, { useState, useEffect } from "react";
import axios from "axios";
import './Table.css';
import actionImg from '../../../assets/action.png';
import deleteimg from '../../../assets/deleteimg.png';
import filter from '../../../assets/filter.png';

const TableComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from API
    axios.get('https://market-hub-backend-kappa.vercel.app/user/get-user-list')
      .then(response => {
        if (response.data.success) {
          // Map the response data to the structure needed for display
          const mappedUsers = response.data.data.map(user => ({
            name: user.fullName,
            whatsapp: user.whatsappNumber,
            alternateno: user.phoneNumber,
            pincode: user.pincode,
            city: user.city,
            state: user.state,
            country: user.country,
            visitingcard: user.visitingCard,
            plan: user.planName,
            startdate: new Date(user.planStartDate).toLocaleDateString(),
            action: ""
          }));
          setUsers(mappedUsers);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  return (
    <div className="userlisttable-container">
      <div className="usertablehead">
        <div style={{ fontWeight: "600" }}>All Users</div>
        <input type="text" placeholder="Search by name, phone..." className="usertable-input" />
        <div id="userlistdatteePickeer">
          <input type="date" id="birthday" name="birthday" className="date-picker-input" />
        </div>
        <button style={{border:"none",backgroundColor:"#FFFFFF"}}>
          <img src={filter} alt="filter" />
        </button>
      </div>

      <div className="table-scrollable-container">
        <table className="userlisttable">
          <thead>
            <tr>
              <th className="userlisthead">Full Name</th>
              <th className="userlisthead">WhatsApp No</th>
              <th className="userlisthead">Alternate No</th>
              <th className="userlisthead">Pincode</th>
              <th className="userlisthead">City</th>
              <th className="userlisthead">State</th>
              <th className="userlisthead">Country</th>
              <th className="userlisthead">Visiting Card</th>
              <th className="userlisthead">Plan Status</th>
              <th className="userlisthead">Start Date</th>
              <th className="userlisthead">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="userlistdata">{user.name}</td>
                <td className="userlistdata">{user.whatsapp}</td>
                <td className="userlistdata">{user.alternateno}</td>
                <td className="userlistdata">{user.pincode}</td>
                <td className="userlistdata">{user.city}</td>
                <td className="userlistdata">{user.state}</td>
                <td className="userlistdata">{user.country}</td>
                <td className="userlistdata">
                  {user.visitingcard ? (
                    <img 
                      src={user.visitingcard} 
                      alt={`${user.name}'s visiting card`} 
                      className="visiting-card-image" 
                      style={{ width: "50px", height: "auto" }}
                    />
                  ) : "No Card"}
                </td>
                <td className="userlistdata">{user.plan}</td>
                <td className="userlistdata">{user.startdate}</td>
                <td className="expired-td" id="userlist-buttons">
                  <button className="userlist-action-btn">
                    <img src={actionImg} alt="Action" className="userlist-action-img" />
                  </button>
                  <button className="userlist-action-btn">
                    <img src={deleteimg} alt="Delete" className="userlist-action-img" />
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

export default TableComponent;
