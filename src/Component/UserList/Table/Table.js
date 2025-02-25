import React, { useState, useEffect } from "react";
import axios from "axios";
import './Table.css';
import actionImg from '../../../assets/action.png';
import deleteimg from '../../../assets/deleteimg.png';
import filter from '../../../assets/filter.png';

const TableComponent = () => {
  const [users, setUsers] = useState([]);
  const [isCustomPopupOpen, setIsCustomPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [customPopupContent, setCustomPopupContent] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  useEffect(() => {
    // Fetch user data from API
    axios.get('https://api.markethubindia.com/user/get-user-list')
      .then(response => {
        if (response.data.success) {
          const mappedUsers = response.data.data.map(user => ({
            name: user.fullName,
            email: user.email,
            whatsapp: user.whatsappNumber,
            alternateno: user.phoneNumber,
            pincode: user.pincode,
            city: user.city,
            state: user.state,
            country: user.country,
            visitingcard: user.visitingCard,
            plan: user.planName,
            startdate: user.planStartDate ? new Date(user.planStartDate) : null, // Ensure it's a valid Date object
            action: ""
          }));
          setUsers(mappedUsers);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  const openCustomPopup = (content) => {
    setCustomPopupContent(content);
    setIsCustomPopupOpen(true);
  };

  const openDeletePopup = (user) => {
    setUserToDelete(user);
    setIsDeletePopupOpen(true);
  };

  const closeCustomPopup = () => {
    setIsCustomPopupOpen(false);
    setSelectedImage('');
    setCustomPopupContent(null);
    setIsDeletePopupOpen(false); // Close delete popup as well
  };

  const handleDeleteUser = () => {
    if (userToDelete) {
      const email = userToDelete.email; // Get the email of the user to delete
      axios.delete(`https://markethub-app-backend.onrender.com/user/delete-user?email=${email}`)
        .then(response => {
          if (response.data.success) {
            // Update the user list to remove the deleted user
            setUsers(users.filter(user => user.email !== email));
            console.log(`Deleted user: ${userToDelete.name}`);
          } else {
            console.error("Failed to delete user:", response.data.message);
          }
        })
        .catch(error => {
          console.error("There was an error deleting the user!", error);
        });
    }
    // Reset states after delete
    setUserToDelete(null);
    setIsDeletePopupOpen(false);
  };

  const toggleFilterOptions = () => {
    setIsFilterOptionsOpen(!isFilterOptionsOpen);
  };

  const filteredUsers = users.filter(user => {
    const userStartDate = user.startdate instanceof Date && !isNaN(user.startdate) 
      ? user.startdate.toISOString().split('T')[0] 
      : '';
    return (
      (searchTerm === '' || user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.whatsapp.includes(searchTerm)) &&
      (selectedDate === '' || userStartDate === selectedDate)
    );
  });

  return (
    <div className="userlisttable-container">
      <div className="usertablehead">
        <div style={{ fontWeight: "600" }}>All Users</div>
        <input
          type="text"
          placeholder="Search by name, phone..."
          className="usertable-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div id="userlistdatteePickeer">
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="date-picker-input"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button style={{ border: "none", backgroundColor: "#FFFFFF" }} onClick={toggleFilterOptions}>
          <img src={filter} alt="filter" />
        </button>
      </div>

      {isFilterOptionsOpen && (
        <div className="filter-options">
          <div className="filter-option">
            <label>Sort By:</label>
            <select>
              <option value="name">Name</option>
              <option value="startdate">Start Date</option>
            </select>
          </div>
          <div className="filter-option">
            <label>Filter By Plan:</label>
            <select>
              <option value="all">All Plans</option>
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>
      )}

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
            {filteredUsers.map((user, index) => (
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
                      style={{ width: "50px", height: "auto", cursor: "pointer" }}
                      onClick={() => openCustomPopup(<img src={user.visitingcard} alt="Visiting Card" />)}
                    />
                  ) : "No Card"}
                </td>
                <td className="userlistdata">{user.plan}</td>
                <td className="userlistdata">
                  {user.startdate instanceof Date && !isNaN(user.startdate) 
                    ? user.startdate.toLocaleDateString() 
                    : 'Invalid Date'}
                </td>
                <td className="expired-td" id="userlist-buttons">
                  <button className="userlist-action-btn" onClick={() => openCustomPopup(
                    <div style={{backgroundColor:"white",padding:"15px"}}className="custom-action-popup">
                      <h3>Action</h3>
                      <select>
                        <option>Free</option>
                        <option>Extend Trial</option>
                        <option>Change Plan</option>
                      </select>
                      <div>
                        <div className="custom-radioheading">Allow Access to</div>
                        <div className="custom-options"> 
                          <input type="radio" id="basic" name="plan" value="Basic Plan" />
                          <label htmlFor="basic">Basic Plan</label>
                          <input type="radio" id="standard" name="plan" value="Standard Plan" />
                          <label htmlFor="standard">Standard Plan</label>
                          <input type="radio" id="premium" name="plan" value="Premium Plan" />
                          <label htmlFor="premium">Premium Plan</label>
                        </div>  
                      </div>
                      <div>
                        <select>
                          <option>No of Days</option>
                          <option>30 Days</option>
                          <option>60 Days</option>
                          <option>90 Days</option>
                        </select>
                      </div>
                      <button className="custom-continue-btn">Continue</button>
                    </div>
                  )}>
                    <img src={actionImg} alt="Action" className="userlist-action-img" />
                  </button>
                  <button className="userlist-action-btn" onClick={() => openDeletePopup(user)}>
                    <img src={deleteimg} alt="Delete" className="userlist-action-img" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Custom Popup for Actions or Image Preview */}
      {isCustomPopupOpen && (
        <div className="custom-popup-overlay">
          <div className="custom-popup-contentimage">
            <button className="custom-close-popup" onClick={closeCustomPopup}>✖</button>
            {customPopupContent}
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {isDeletePopupOpen && (
        <div className="custom-popup-overlay">
          <div className="custom-popup-content-delete">
            <div className="userdelete-headingpopup">Are you sure you want to delete?</div>
            <div className="delete-confirmation-buttons">
              <button className="custom-continue-btn" onClick={handleDeleteUser}>Yes</button>
              <button className="custom-no-btn" onClick={closeCustomPopup}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;