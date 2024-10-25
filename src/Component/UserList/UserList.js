import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Modal from '@mui/material/Modal';
import './UserList.css';
import totaluser from '../../asset/totaluser.png';
import freetrailUser from '../../asset/freetrail.png';
import subscribedUser from '../../asset/subscribe.png';
import rejectedUser from '../../asset/rejected.png';
import action from '../../assets/action.png';
import visitingcard from '../../asset/visting card.png';
import deleteimg from '../../assets/deleteimg.png';

const userListData = [
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024',action:action },
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024',action:action },
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024',action:action },
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    { fullName: 'Ram Bandhu',whatsappNumber: '8290839130',alternateNo:"7905222396", pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: visitingcard, subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' ,action:action},
    // ... more user data
];

const DashboardPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedCard(imageUrl);
        setIsPopupOpen(true);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
        setSelectedCard('');
    };

    return (
        <Box className="dashboard-container">
            {/* Statistics Section */}
            <Box className="statistics-section">
                {/* Statistics Cards */}
                <Card className="card">
                    <CardContent className="card-content">
                        <img src={totaluser} alt="Total Users Icon" className="icon" />
                        <Box>
                            <h6>Total Users</h6>
                            <h4>16,689</h4>
                        </Box>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent className="card-content">
                        <img src={freetrailUser} alt="Free Trial Users Icon" className="icon" />
                        <Box>
                            <h6>Free Trial Users</h6>
                            <h4>10,293</h4>
                        </Box>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent className="card-content">
                        <img src={subscribedUser} alt="Subscribed Users Icon" className="icon" />
                        <Box>
                            <h6>Subscribed Users</h6>
                            <h4>4,279</h4>
                        </Box>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent className="card-content">
                        <img src={rejectedUser} alt="Rejected Users Icon" className="icon" />
                        <Box>
                            <h6>Rejected Users</h6>
                            <h4>2,040</h4>
                        </Box>
                    </CardContent>
                </Card>
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
        className="search-input"  // Added a class for styling in CSS
    />
    <Box className="custom-date-picker">
        <TextField
            label="Select Date"
            variant="outlined"
            size="small"
            type="date"
            className="date-picker"  // Added a class for styling in CSS
        />
        <Button variant="contained" className="filter-button" startIcon={<FilterAltIcon />}>
            Filter & Sort
        </Button>
    </Box>
</Box>

            {/* User List Table */}
            <Box className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>whatsappNumber</th>
                            <th>alternateNo</th>
                            <th>Pincode</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Visiting Card</th>
                            <th>Plan Status</th>
                            <th>Start Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userListData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.fullName}</td>
                                <td>{user.whatsappNumber}</td>
                                <td>{user.alternateNo}</td>
                                <td>{user.pincode}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>
                                    {user.visitingCard === '-' ? '-' : (
                                        <img
                                            src={user.visitingCard}
                                            alt="Visiting Card"
                                            className="visiting-card-img"
                                            onClick={() => handleImageClick(user.visitingCard)}
                                        />
                                    )}
                                </td>
                                <td>{user.subscriptionType}</td>
                                <td>{user.subscriptionDate}</td>
                                <td>
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
