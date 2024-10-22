import './verifyuser.css'; // Import external CSS
import filterimg from '../../assets/filter.png';
import tickimg from '../../assets/tickimg.png';
import delimg from '../../assets/removeimg.png';
import visitcard from '../../assets/visitcard.png';
import React, { useState } from 'react';
import Pagination from '../Pagination';

function VerifyUsers() {
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false); // Accept Modal visibility state
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false); // Reject Modal visibility state
  const [selectedUser, setSelectedUser] = useState(null); // To store selected user for confirmation

  const users = [
    {
      name: 'Bhavesh Kumar',
      phone: '+91 7838392384',
      alterno: '+91 7838392384',
      pincode: '400089',
      city: 'Mumbai',
      state: 'Maharashtra',
      visitingCard: visitcard, // Image path or URL
      dateTime: '30-Sep-2024, 10:23',
    },
    {
      name: 'Ravi Sandeep',
      phone: '+91 7859923183',
      alterno: '+91 7838392384',
      pincode: '400020',
      city: 'Gurgaon',
      state: 'Haryana',
      visitingCard: visitcard,
      dateTime: '29-Sep-2024, 14:55',
    },
    // Add other users here...
  ];

  const handleTickClick = (user) => {
    setSelectedUser(user);
    setIsAcceptModalOpen(true);
  };

  const handleRejectClick = (user) => {
    setSelectedUser(user);
    setIsRejectModalOpen(true);
  };

  const handleConfirm = () => {
    console.log('User accepted:', selectedUser);
    setIsAcceptModalOpen(false); // Close the modal after confirmation
    // Add your logic here for accepting the user
  };

  const handleRejectConfirm = () => {
    console.log('User rejected:', selectedUser);
    setIsRejectModalOpen(false); // Close the reject modal after confirmation
    // Add your logic here for rejecting the user
  };

  const handleCancel = () => {
    setIsAcceptModalOpen(false); // Close the accept modal without action
    setIsRejectModalOpen(false); // Close the reject modal without action
  };

  return (
    <div className="verify-users-container">
      <div className="verify-heading">Verify Users</div>

      <div className="table-container">
        <div className="top-bar">
          <div style={{ paddingTop: '10px', fontSize: "16px", fontWeight: "600" }}>Verify Users</div>
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
              <th>WhatsApp No</th>
              <th>Alternate No</th>
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
                  <button className="edit-btn" onClick={() => handleTickClick(user)}>
                    <img src={tickimg} alt="accept" />
                  </button>
                  <button className="delete-btn" onClick={() => handleRejectClick(user)}>
                    <img src={delimg} alt="reject" />
                  </button>
                </td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.alterno}</td>
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

      {/* Accept Modal Popup */}
      {isAcceptModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content accept-modal">
            <div className='modal-title'>Add User</div>
            <div className='modal-confirmation-message'>Are you sure you want to accept the user?</div>
            <div className="modal-actions">
              <button className="modal-btn modal-cancel" onClick={handleCancel}>No</button>
              <button className="modal-btn modal-confirm" onClick={handleConfirm}>Yes</button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal Popup */}
      {isRejectModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content reject-modal">
            <div className='modal-title-reject'>Reject User</div>
            <div className='modal-confirmation-message-reject'>Are you sure you want to reject the user?</div>
            <div className="modal-actions-reject">
              <button className="modal-reject-btn modal-reject-cancel" onClick={handleCancel}>No</button>
              <button className="modal-reject-btn modal-reject-confirm" onClick={handleRejectConfirm}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifyUsers;
