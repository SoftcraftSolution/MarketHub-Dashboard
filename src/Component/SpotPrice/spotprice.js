import React, { useState } from 'react';
import VerifyUsersTable from './VerifySpot/VerifySpot';
import PriceListTable from './PriceList/PriceList';
import Pagination from '../Pagination';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './spotprice.css';
import righttick from '../../assets/tickimg.png';
import wrongtick from '../../assets/removeimg.png';
import filterimg from '../../assets/filter.png';

function SpotPriceTable({ data = [], onVerifyUser, onAddSpotPrice }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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
  ];

  const displayedData = data.length > 0 ? data : exampleData;

  const filteredData = displayedData.filter(item =>
    item.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.postedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDialogOpen = (item, action) => {
    setSelectedItem(item);
    setActionType(action);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setActionType(null);
  };

  const handleConfirm = () => {
    if (selectedItem) {
      if (actionType === 'verify') {
        onVerifyUser(selectedItem.id);
      } else if (actionType === 'reject') {
        onAddSpotPrice(selectedItem.id);
      }
    }
    handleCloseDialog();
  };

  return (
    <div className="spot-price-container">
      <div className='spotpagemaintitle'>Spot Price</div>

      <div className="verify-users-section">
        <VerifyUsersTable />
      </div>

      <div className="price-list-section">
        <PriceListTable />

        <div className="spot-price-table">
          <div className='spot-verify-heading'>
            <div className='spot-verify-title'>Verify Users</div>
            <input
              type="text"
              placeholder="Search"
              className="search-bar-verify-user-list"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="spotprice-filter-btn">
              <img src={filterimg} alt="filter" />
            </button>
          </div>

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
                      style={{ border: 'none', marginRight: '10px' }}
                      onClick={() => handleDialogOpen(item, 'verify')}
                    >
                      <img src={righttick} alt="Verify" />
                    </button>
                    <button
                      style={{ border: 'none' }}
                      onClick={() => handleDialogOpen(item, 'reject')}
                    >
                      <img src={wrongtick} alt="Reject" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination />

          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>
              {selectedItem ? `Action for ${selectedItem.postedBy}` : ''}
            </DialogTitle>
            <DialogContent>
              <p>
                Are you sure you want to {actionType} the {selectedItem?.commodity}?
              </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                No
              </Button>
              <Button onClick={handleConfirm} color="primary">
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default SpotPriceTable;
