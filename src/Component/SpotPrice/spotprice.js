import React, { useState } from 'react';
import './spotprice.css'; // Importing the CSS file
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import righttick from '../../assets/tickimg.png';
import wrongtick from '../../assets/removeimg.png';

function SpotPriceTable({ data = [], onVerifyUser, onAddSpotPrice }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState(null); // State for action type
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Example data to show when no data is passed
  const exampleData = [
    {
      id: 1,
      postedBy: "John Doe",
      commodity: "Wheat",
      city: "New York",
      country: "USA",
      previousAmt: "$200",
      currentAmt: "$210",
      dateTime: "2024-09-25 10:00 AM",
    },
    {
      id: 2,
      postedBy: "Jane Smith",
      commodity: "Corn",
      city: "Chicago",
      country: "USA",
      previousAmt: "$150",
      currentAmt: "$155",
      dateTime: "2024-09-25 11:00 AM",
    },
    {
      id: 3,
      postedBy: "Michael Johnson",
      commodity: "Soybeans",
      city: "Los Angeles",
      country: "USA",
      previousAmt: "$300",
      currentAmt: "$310",
      dateTime: "2024-09-25 12:00 PM",
    },
    {
      id: 4,
      postedBy: "Emily Davis",
      commodity: "Barley",
      city: "Houston",
      country: "USA",
      previousAmt: "$120",
      currentAmt: "$125",
      dateTime: "2024-09-25 01:00 PM",
    },
  ];

  const displayedData = data.length > 0 ? data : exampleData;

  // Filter data based on search term
  const filteredData = displayedData.filter(item => 
    item.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.postedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDialogOpen = (item, action) => {
    setSelectedItem(item);
    setActionType(action); // Set action type (verify or reject)
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setActionType(null); // Reset action type
  };

  const handleConfirm = () => {
    if (selectedItem) {
      if (actionType === 'verify') {
        onVerifyUser(selectedItem.id); // Handle verify action
      } else if (actionType === 'reject') {
        onAddSpotPrice(selectedItem.id); // Handle reject action
      }
    }
    handleCloseDialog();
  };

  return (
    <div className="spot-price-table">
      {/* Search Input */}
      <TextField
        label="Search"
        variant="outlined"
        size="small" // Make the input field smaller
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        style={{ width: '200px' }} // Set a fixed width for smaller appearance
      />

      <table>
        <thead>
          <tr>
            <th>Posted by</th>
            <th>Commodity</th>
            <th>City</th>
            <th>Country</th>
            <th>Previous Amt</th>
            <th>Current Amt</th>
            <th>Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.postedBy}</td>
              <td>{item.commodity}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>{item.previousAmt}</td>
              <td>{item.currentAmt}</td>
              <td>{item.dateTime}</td>
              <td>
                <button 
                  style={{ border: 'none' }} 
                  onClick={() => handleDialogOpen(item, 'verify')} // Opens dialog for verification
                >
                  <img src={righttick} alt="Verify" />
                </button>
                <button 
                  style={{ border: 'none' }} 
                  onClick={() => handleDialogOpen(item, 'reject')} // Opens dialog for rejection
                >
                  <img src={wrongtick} alt="Reject" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedItem ? `Action for ${selectedItem.postedBy}` : ''}
        </DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to {actionType === 'verify' ? 'verify' : 'reject'} the {selectedItem?.commodity}?
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SpotPriceTable;
