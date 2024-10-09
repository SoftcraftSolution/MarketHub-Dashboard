    import React, { useState } from 'react';
    import './addadmin.css';
    import logout from '../../assets/logout.png';
    import pencilIcon from '../../assets/pencil.png';
    import action from '../../assets/action.png'; 
    import Pagination from '../Pagination'; 
    import deleteimg from '../../assets/deleteimg.png';
    // Make sure you import your action image

    const AdminDashboard = () => {
        const [selectedImage, setSelectedImage] = useState(null);
        const [showPopup, setShowPopup] = useState(false);
        const [showOtpPopup, setShowOtpPopup] = useState(false); // State for OTP popup
        const [adminDetails, setAdminDetails] = useState({ fullName: '', phoneNumber: '+91 ', email: '', accessLevel: '' });

        const admins = [
            { name: 'Shantanu Dixit', mobile: '7689898034', email: 'Shantanu@xyzmail.com', access: 'Spot Price', date: '12-04-2024', action: action,delete:deleteimg },
            { name: 'Abhishek Mishra', mobile: '7689898055', email: 'AbhiMishra@gmail.com', access: 'Spot Price', date: '26-03-2023', action: action,delete:deleteimg },
            { name: 'Niraj Prakash', mobile: '7689898040', email: 'nirajPrakash@workmail.com', access: 'Spot Price', date: '28-05-2024', action: action,delete:deleteimg },
            { name: 'Parmeshwar Kadam', mobile: '7689898049', email: 'parmeshwarKadam@xyzmail.com', access: 'Spot Price', date: '08-12-2023', action: action ,delete:deleteimg},
            { name: 'Niraj Prakash', mobile: '7689898050', email: 'Keshav@Niraj123@gmail.com', access: 'Spot Price', date: '27-01-2024', action: action,delete:deleteimg }
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

        const handleAccessChange = (e) => {
            setAdminDetails({ ...adminDetails, accessLevel: e.target.value });
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
                <div style={{fontWeight:"800",fontSize :"18px",paddingBottom:"12px"}}>Add Admin</div>
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
                        <div className='admindetailslatest'>
    <div>
        <span style={{ color: "#696969" }}>Name - </span>
        <strong>Raj Deep</strong>
    </div>
    <div style={{ paddingTop: "22px" }}>
        <span style={{ color: "#696969" }}>Mobile - </span>
        <strong>+91 7098567389</strong>
    </div>
</div>
 
                    </div>
                    <div className='admin-buttonflex'>
                        <button className="add-admin-btn" onClick={handleOpenPopup}>Add Admin</button>
                        <button className="logout-btn"><img src={logout} alt="log" /></button>
                    </div>
                </div>

                <div className="admin-list">
                    <div style={{fontSize:"17px",fontWeight:"600"}}>List of admins</div>
                    <table>
                        <thead>
                            <tr>
                                <th className="admin-headingtable">Admin Name</th>
                                <th className="admin-headingtable">Mobile Number</th>
                                <th className="admin-headingtable"> Email ID</th>
                                <th className="admin-headingtable">Access</th>
                                <th className="admin-headingtable">Creation Date</th>
                                <th className="admin-headingtable">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin, index) => (
                                <tr key={index}>
                                    <td>{admin.name}</td>
                                    <td>{admin.mobile}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.access}</td>
                                    <td>{admin.date}</td>
                                    <td>
                                        <img 
                                            src={admin.action} 
                                            alt="Action" 
                                            className="action-icon" 
                                            onClick={() => console.log(`Action clicked for ${admin.name}`)}
                                        />
                                       <button style={{border:"none"}}>
                                        <img 
                                            src={admin.delete} 
                                            alt="Action" 
                                            className="action-icon" 
                                            onClick={() => console.log(`Action clicked for ${admin.name}`)}
                                        />
                                        </button>
                                    </td>

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
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter Email Address" 
                                value={adminDetails.email} 
                                onChange={handleAdminInputChange} 
                            />
                            <div className="access-options">
                                <span className='add-span'>Allow Access to</span>
                                <div className="radio-group">
                                <div className='add-radio'>  
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="accessLevel" 
                                            value="Spot Price" 
                                            checked={adminDetails.accessLevel === "Spot Price"} 
                                            onChange={handleAccessChange} 
                                        />
                                        Spot Price
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="accessLevel" 
                                            value="News" 
                                            checked={adminDetails.accessLevel === "News"} 
                                            onChange={handleAccessChange} 
                                        />
                                        News
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="accessLevel" 
                                            value="Spot Price & News" 
                                            checked={adminDetails.accessLevel === "Spot Price & News"} 
                                            onChange={handleAccessChange} 
                                        />
                                        Spot Price & News
                                    </label>
                                </div>  
                                </div>
                            </div>
                            <button className="submit-btn" onClick={handleSubmit}>Continue</button>
                        </div>
                        <Pagination />
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
