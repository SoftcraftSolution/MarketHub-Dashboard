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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const exampleData = [
    { id: 1, postedBy: "John Doe", commodity: "Wheat", city: "New York", country: "USA", previousAmt: "$200", currentAmt: "$210", dateTime: "2024-09-25 10:00 AM" },
    { id: 2, postedBy: "Jane Smith", commodity: "Corn", city: "Chicago", country: "USA", previousAmt: "$150", currentAmt: "$155", dateTime: "2024-09-25 11:00 AM" },
  ];

  const displayedData = data.length > 0 ? data : exampleData;

  const filteredData = displayedData.filter(item =>
    item.commodity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
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
      if (actionType === 'verify') onVerifyUser(selectedItem.id);
      else if (actionType === 'reject') onAddSpotPrice(selectedItem.id);
    }
    handleCloseDialog();
  };

  return (
    <div className="spot-price-container">
      <div className='spotpagemaintitle'>Spot Price</div>

      <div className="verify-users-section">
        <VerifyUsersTable />
        <input
          type="text"
          placeholder="Search Verify Users"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="price-list-section">
        <PriceListTable />

        <div className="price-list-table">
          <div className="search-and-datepicker-container">
            <input
              type="text"
              placeholder="Search Price List"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
              {paginatedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.postedBy}</td>
                  <td>{item.commodity}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.previousAmt}</td>
                  <td>{item.currentAmt}</td>
                  <td>{item.dateTime}</td>
                  <td>
                    <button onClick={() => handleDialogOpen(item, 'verify')}>
                      <img src={righttick} alt="Verify" />
                    </button>
                    <button onClick={() => handleDialogOpen(item, 'reject')}>
                      <img src={wrongtick} alt="Reject" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Action Confirmation</DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to {actionType === 'verify' ? 'verify' : 'reject'} the {selectedItem?.commodity}?
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>No</Button>
          <Button onClick={handleConfirm}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SpotPriceTable.defaultProps = {
  onVerifyUser: (id) => console.log(`Verified user with id: ${id}`),
  onAddSpotPrice: (id) => console.log(`Added spot price for id: ${id}`),
};

export default SpotPriceTable;
