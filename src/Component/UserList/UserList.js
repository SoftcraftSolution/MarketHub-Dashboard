import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Modal from '@mui/material/Modal'; // Import Modal from MUI
import './UserList.css'; // Import the CSS file
import totaluser from '../../asset/totaluser.png';
import freetrailUser from '../../asset/freetrail.png';
import subscribedUser from '../../asset/subscribe.png';
import rejectedUser from '../../asset/rejected.png';
import action from '../../assets/action.png';
import visitingcard from '../../asset/visting card.png';
import deleteimg from '../../assets/deleteimg.png';

const userListData = [
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024',action:action },
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024',action:action },
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024',action:action },
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    // ... more user data
];

const DashboardPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
    const [selectedCard, setSelectedCard] = useState(''); // State to store the selected visiting card image

    // Function to open the popup and set the selected card
    const handleImageClick = (imageUrl) => {
        setSelectedCard(imageUrl);
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const handleClose = () => {
        setIsPopupOpen(false);
        setSelectedCard(''); // Clear the selected image when closing the modal
    };

    return (
        <Box className="dashboard-container">
            {/* Statistics Section */}
            <Box className="statistics-section">
                {/* Statistics Cards */}
                <Card sx={{ borderRadius: '20px' }} className="card">
                    <CardContent className="usercard-content">
                        <img src={totaluser} alt="Total Users Icon" width="40px" />
                        <Box>
                            <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                Total Users
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: '700' }}>16,689</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{ borderRadius: '20px' }} className="card">
                    <CardContent className="usercard-content">
                        <img src={freetrailUser} alt="Free Trial Users Icon" width="40px" />
                        <Box>
                            <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif' }} >Free Trial Users</Typography>
                            <Typography variant="h4" sx={{ fontWeight: '700' }}>10,293</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{ borderRadius: '20px' }} className="card">
                    <CardContent className="usercard-content">
                        <img src={subscribedUser} alt="Subscribed Users Icon" width="40px" />
                        <Box>

                            <Typography variant="h6"  >Subscribed Users</Typography>
                            <Typography variant="h4" sx={{ fontWeight: '700' }}>4,279</Typography>
                        </Box>
                    </CardContent>
                </Card>    
                <Card sx={{ borderRadius: '20px' }} className="card">
                    <CardContent className="usercard-content">
                        <img src={rejectedUser} alt="Rejected Users Icon" width="40px" />
                        <Box>
                            <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif' }}>Rejected Users</Typography>
                            <Typography variant="h4" sx={{ fontWeight: '700' }}>2,040</Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* Other cards */}
            </Box>

            {/* Search and Filter Section */}
            <Box className="search-filter-section">
                <TextField
                    label="Search by name, phone..."
                    variant="outlined"
                    size="small"
                    InputProps={{
                        endAdornment: <SearchIcon />,
                    }}
                    sx={{ width: '300px' }}
                />
                <Box>
                    <TextField
                        label="Select Date"
                        variant="outlined"
                        size="small"
                        type="date"
                        sx={{ mr: 1, marginRight: '340px', width: 'auto' }}
                    />
                    <Button variant="contained" sx={{ marginRight: '20px', textAlign: 'left' }} startIcon={<FilterAltIcon />}>Filter & Sort</Button>
                </Box>
            </Box>

            {/* User List Table */}
            <Box sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="userlisttable-header">Full Name</th>
                            <th className="userlisttable-header">Phone Number</th>
                            <th className="userlisttable-header">Pincode</th>
                            <th className="userlisttable-header">City</th>
                            <th className="userlisttable-header">State</th>
                            <th className="userlisttable-header">Visiting Card</th>
                            <th className="userlisttable-header">Plan Status</th>
                            <th className="userlisttable-header">Start Date</th>
                            <th className="userlisttable-header">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userListData.map((user, index) => (
                            <tr key={index} className="table-row">
                                <td className="table-cell">{user.fullName}</td>
                                <td className="table-cell">{user.phoneNumber}</td>
                                <td className="table-cell">{user.pincode}</td>
                                <td className="table-cell">{user.city}</td>
                                <td className="table-cell">{user.state}</td>
                                <td className="table-cell">
                                    {user.visitingCard === '-' ? '-' : (
                                        <img
                                            src={user.visitingCard}
                                            alt="Visiting Card"
                                            width="50px"
                                            onClick={() => handleImageClick(user.visitingCard)} // Open popup on click
                                            style={{ cursor: 'pointer' }} // Add pointer cursor on hover
                                        />
                                    )}
                                </td>
                                <td className="table-cell">{user.subscriptionType}</td>
                                <td className="table-cell">{user.subscriptionDate}</td>
                                <td className="table-cell">
                                    <button className="userlist-action-btn">
                                        <img src={user.action} alt="Action" className="userlist-action-img" />
                                    </button>
                                    <button className="userlist-action-btn">
                                        <img src={deleteimg} alt="Delete" className="userlist-action-img" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>

            {/* Popup for Visiting Card Image Preview */}
            <Modal
                open={isPopupOpen}
                onClose={handleClose}
                aria-labelledby="image-preview-title"
                aria-describedby="image-preview-description"
            >
                <Box className="modal-box">
                    <img src={selectedCard} alt="Visiting Card Preview" className="modal-image" />
                </Box>
            </Modal>
        </Box>
    );
};

export default DashboardPage;