import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './UserList.css'; // Import the CSS file
import totaluser from '../../asset/totaluser.png';
import freetrailUser from '../../asset/freetrail.png';
import subscribedUser from '../../asset/subscribe.png';
import rejectedUser from '../../asset/rejected.png';
import visitingcard from '../../asset/visting card.png';

const userListData = [
    { fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
{ fullName: 'Ram Bandhu', phoneNumber: '8290839130', pincode: '480023', city: 'Gurgaon', state: 'Haryana', visitingCard: 'Card Image', subscriptionType: 'Standard Plan', subscriptionDate: '30-12-2024' },
  // Your user data...
];

const DashboardPage = () => {
    return (
      <Box className="dashboard-container">
        {/* Statistics Section */}
        <Box className="statistics-section">
          <Card  sx={{ borderRadius: '20px' }} className="card">
            <CardContent className="card-content">
              <img src={totaluser} alt="Total Users Icon" width="40px" />
              <Box>
                <Typography variant="h6">Total Users</Typography>
                <Typography variant="h4">16,689</Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: '20px' }} className="card">
            <CardContent className="card-content">
              <img src={freetrailUser} alt="Free Trial Users Icon" width="40px" />
              <Box>
                <Typography variant="h6">Free Trial Users</Typography>
                <Typography variant="h4">10,293</Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: '20px' }} className="card">
            <CardContent className="card-content">
              <img src={subscribedUser} alt="Subscribed Users Icon" width="40px" />
              <Box>
                <Typography variant="h6">Subscribed Users</Typography>
                <Typography variant="h4">4,279</Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: '20px' }} className="card">
            <CardContent className="card-content">
              <img src={rejectedUser} alt="Rejected Users Icon" width="40px" />
              <Box>
                <Typography variant="h6">Rejected Users</Typography>
                <Typography variant="h4">2,040</Typography>
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
            sx={{ width: '300px' }}
          />
          <Box>
            <TextField label="Select Date" variant="outlined" size="small" type="date" sx={{ mr: 1 }} />
            <Button variant="contained" startIcon={<FilterAltIcon />}>Filter & Sort</Button>
          </Box>
        </Box>
  
        {/* User List Table */}
        <Box sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">Full Name</th>
                <th className="table-header">Phone Number</th>
                <th className="table-header">Pincode</th>
                <th className="table-header">City</th>
                <th className="table-header">State</th>
                <th className="table-header">Visiting Card</th>
                <th className="table-header">Subscription Type</th>
                <th className="table-header">Subscription Date</th>
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
                  {user.visitingCard === '-' ? '-' : <img src={visitingcard} alt="Card" width="50px" />}

                  </td>
                  <td className="table-cell">{user.subscriptionType}</td>
                  <td className="table-cell">{user.subscriptionDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    );
  };
  
  export default DashboardPage;

