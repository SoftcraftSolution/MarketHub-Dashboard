import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './addadmin.css';
import logout from '../../assets/logout.png';
import pencilIcon from '../../assets/pencil.png';
import action from '../../assets/action.png';
import deleteimg from '../../assets/deleteimg.png';
import tickImage from '../../assets/tick.png'; // Import tick image

const AdminDashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showAddNewAdminPopup, setShowAddNewAdminPopup] = useState(false); // State for Add New Admin confirmation popup
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup
    const [showDeleteConfirmationPopup, setShowDeleteConfirmationPopup] = useState(false); // State for delete confirmation popup
    const [showDeleteSuccessPopup, setShowDeleteSuccessPopup] = useState(false); // State for delete success popup
    const [adminDetails, setAdminDetails] = useState({ fullName: '', phoneNumber: '+91 ', email: '', accessLevel: '' });
    const [loading, setLoading] = useState(false); // State for loading
    const [error, setError] = useState(''); // State for error messages
    const [admins, setAdmins] = useState([]); // State to store admin list from API
    const [adminToDelete, setAdminToDelete] = useState(null); // State to store the admin to delete

    // Fetch admin list from API
    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get('https://admin.markethubindia.com/admin/user-list');
                if (response.data.message === "User list retrieved successfully") {
                    setAdmins(response.data.users); // Set the admin list
                } else {
                    console.error('Failed to fetch admin list');
                }
            } catch (error) {
                console.error('Error fetching admin list:', error);
            }
        };

        fetchAdmins();
    }, []);

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
        setAdminDetails({ fullName: '', phoneNumber: '+91 ', email: '', accessLevel: '' }); // Reset form fields
        setError(''); // Clear error messages
    };

    const handleAdminInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber') {
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

    const handleSubmit = async () => {
        const { fullName, phoneNumber, email, accessLevel } = adminDetails;

        // Basic validation
        if (!fullName || !phoneNumber || !email || !accessLevel) {
            setError('All fields are required.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://admin.markethubindia.com/admin/register', {
                fullName,
                email,
                phoneNumber,
                access: accessLevel.toLowerCase(), // Convert to lowercase as per API requirement
                role: 'admin' // Hardcoded role as per API requirement
            });

            if (response.data.message === "Admin registered successfully") {
                setShowPopup(false);
                setShowAddNewAdminPopup(false);
                setShowSuccessPopup(true); // Show success popup
                setAdminDetails({ fullName: '', phoneNumber: '+91 ', email: '', accessLevel: '' }); // Reset form fields

                // Refresh the admin list after adding a new admin
                const adminListResponse = await axios.get('https://admin.markethubindia.com/admin/user-list');
                if (adminListResponse.data.message === "User list retrieved successfully") {
                    setAdmins(adminListResponse.data.users); // Update the admin list
                }
            } else {
                setError('Failed to add admin. Please try again.');
            }
        } catch (error) {
            console.error('Error adding admin:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClick = (adminId) => {
        setAdminToDelete(adminId); // Set the admin ID to delete
        setShowDeleteConfirmationPopup(true); // Show delete confirmation popup
    };

    const handleDeleteConfirm = async () => {
        if (!adminToDelete) return;

        try {
            const response = await axios.delete(`https://admin.markethubindia.com/admin/delete-admin`, {
                params: { id: adminToDelete } // Pass the admin ID as a query parameter
            });

            if (response.data.message === "Admin deleted successfully") {
                setShowDeleteConfirmationPopup(false); // Close confirmation popup
                setShowDeleteSuccessPopup(true); // Show delete success popup

                // Refresh the admin list after deleting
                const adminListResponse = await axios.get('https://admin.markethubindia.com/admin/user-list');
                if (adminListResponse.data.message === "User list retrieved successfully") {
                    setAdmins(adminListResponse.data.users); // Update the admin list
                }
            } else {
                console.error('Failed to delete admin');
            }
        } catch (error) {
            console.error('Error deleting admin:', error);
        } finally {
            setAdminToDelete(null); // Reset admin to delete
        }
    };

    return (
        <div className="admin-dashboard">
            <div style={{ fontWeight: "800", fontSize: "18px", paddingBottom: "12px" }}>Add Admin</div>
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
                <div style={{ fontSize: "17px", fontWeight: "600" }}>List of admins</div>
                <table>
                    <thead>
                        <tr>
                            <th className="admin-headingtable">Admin Name</th>
                            <th className="admin-headingtable">Mobile Number</th>
                            <th className="admin-headingtable">Email ID</th>
                            <th className="admin-headingtable">Access</th>
                            <th className="admin-headingtable">Creation Date</th>
                            <th className="admin-headingtable">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, index) => (
                            <tr key={index}>
                                <td>{admin.fullName || 'N/A'}</td>
                                <td>{admin.phoneNumber}</td>
                                <td>{admin.email}</td>
                                <td>{admin.access}</td>
                                <td>{new Date(admin.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <img
                                        src={action}
                                        alt="Action"
                                        className="action-icon"
                                        onClick={() => console.log(`Action clicked for ${admin.fullName}`)}
                                    />
                                    <button style={{ border: "none", backgroundColor: "#FFFFFF" }}>
                                        <img
                                            src={deleteimg}
                                            alt="Delete"
                                            className="action-icon"
                                            onClick={() => handleDeleteClick(admin._id)} // Pass admin ID to delete
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
                        {error && <div className="error-message">{error}</div>}
                        <div className='addpopup-flex'>
                            <input
                                className='addadmin-fullname'
                                type="text"
                                name="fullName"
                                placeholder="Enter Full Name"
                                value={adminDetails.fullName}
                                onChange={handleAdminInputChange}
                            />
                            <input
                                className='addadmin-phone'
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter Phone Number"
                                value={adminDetails.phoneNumber}
                                onChange={handleAdminInputChange}
                            />
                        </div>
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
                        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Adding...' : 'Continue'}
                        </button>
                    </div>
                </div>
            )}

            {/* Success popup */}
            {showSuccessPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-icon" onClick={() => setShowSuccessPopup(false)}>×</span>
                        <div className='success-message'>
                            <img src={tickImage} alt="Success" className="success-icon" />
                            <span>Admin added successfully!</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Popup */}
            {showDeleteConfirmationPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-icon" onClick={() => setShowDeleteConfirmationPopup(false)}>×</span>
                        <div className='poptitle'>Are you sure you want to delete this admin?</div>
                        <div className="popup-buttons">
                            <button className="confirm-btn" onClick={handleDeleteConfirm}>Yes</button>
                            <button className="cancel-btn" onClick={() => setShowDeleteConfirmationPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Success Popup */}
            {showDeleteSuccessPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-icon" onClick={() => setShowDeleteSuccessPopup(false)}>×</span>
                        <div className='success-message'>
                            <img src={tickImage} alt="Success" className="success-icon" />
                            <span>Admin deleted successfully!</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;