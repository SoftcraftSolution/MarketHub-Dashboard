import React, { useState } from 'react';
import './addadmin.css';
import logout from '../../assets/logout.png';
import pencilIcon from '../../assets/pencil.png';

const AdminDashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showOtpPopup, setShowOtpPopup] = useState(false); // State for OTP popup
    const [adminDetails, setAdminDetails] = useState({ fullName: '', phoneNumber: '+91 ' });

    const admins = [
        { name: 'Shantanu Dixit', mobile: '7689898034', email: 'Shantanu@xyzmail.com', date: '12-04-2024' },
        { name: 'Abhishek Mishra', mobile: '7689898055', email: 'AbhiMishra@gmail.com', date: '26-03-2023' },
        { name: 'Niraj Prakash', mobile: '7689898040', email: 'nirajPrakash@workmail.com', date: '28-05-2024' },
        { name: 'Parmeshwar Kadam', mobile: '7689898049', email: 'parmeshwarKadam@xyzmail.com', date: '08-12-2023' },
        { name: 'Niraj Prakash', mobile: '7689898050', email: 'Keshav@Niraj123@gmail.com', date: '27-01-2024' }
    ];

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const image = URL.createObjectURL(e.target.files[0]);
            setSelectedImage(image);
        }
    };

    const handleDeleteImage = () => {
        if (window.confirm("Are you sure you want to delete this image?")) {
            setSelectedImage(null);
        }
    };

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleAdminInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber') {
            // Ensure "+91" is always there
            if (!value.startsWith('+91 ')) {
                setAdminDetails({ ...adminDetails, phoneNumber: '+91 ' });
            } else {
                setAdminDetails({ ...adminDetails, phoneNumber: value });
            }
        } else {
            setAdminDetails({ ...adminDetails, [name]: value });
        }
    };

    const handleSubmit = () => {
        // Hide the first popup and show the OTP popup
        setShowPopup(false);
        setShowOtpPopup(true);
    };

    const handleOtpSubmit = () => {
        // Submit OTP logic here
        console.log('OTP Submitted');
        setShowOtpPopup(false); // Close the OTP popup after submission
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <div className="admin-details">
                    <div className="admin-details-1">
                        <div className="admin-avatar-wrapper">
                            <img 
                                src={selectedImage || "https://via.placeholder.com/100"} 
                                alt="Admin" 
                                className="admin-avatar" 
                            />
                            <img 
                                src={pencilIcon} 
                                alt="Edit" 
                                className="edit-icon" 
                                onClick={() => document.getElementById('imageUpload').click()} 
                            />
                            <input 
                                type="file" 
                                id="imageUpload" 
                                style={{ display: 'none' }} 
                                onChange={handleImageChange} 
                                accept="image/*"
                            />
                        </div>
                        <div className="admin-info">
                            <div className='basicdetail'>
                                <div className='admin-name'>Raj Deep</div>
                                <span className="admin-role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div>Name - Raj Deep</div>
                    <div>Mobile - +91 7098567389</div>
                </div>
                <div className='admin-buttonflex'>
                    <button className="add-admin-btn" onClick={handleOpenPopup}>Add Admin</button>
                    <button className="logout-btn"><img src={logout} alt="log" /></button>
                </div>
            </div>

            <div className="admin-list">
                <h3>List of admins</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Admin Name</th>
                            <th>Mobile Number</th>
                            <th>Date of Joining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, index) => (
                            <tr key={index}>
                                <td>{admin.name}</td>
                                <td>{admin.mobile}</td>
                                <td>{admin.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* First popup (Add Admin) */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-icon" onClick={handleClosePopup}>×</span>
                        <div className='poptitle'>Add New Admin</div>
                        <input 
                            type="text" 
                            name="fullName" 
                            placeholder="Enter Full Name" 
                            value={adminDetails.fullName} 
                            onChange={handleAdminInputChange} 
                        />
                        <input 
                            type="text" 
                            name="phoneNumber" 
                            placeholder="Enter Phone Number" 
                            value={adminDetails.phoneNumber} 
                            onChange={handleAdminInputChange} 
                        />
                        <button className="submit-btn" onClick={handleSubmit}>Continue</button>
                    </div>
                </div>
            )}

            {/* Second popup (Verify OTP) */}
            {showOtpPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-icon" onClick={() => setShowOtpPopup(false)}>×</span>
                        <div className='popup2'>Verify Number</div>
                        <input 
                            type="text" 
                            name="otp" 
                            placeholder="Enter OTP" 
                        />
                        <button className="submit-btn" onClick={handleOtpSubmit}>Continue</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
