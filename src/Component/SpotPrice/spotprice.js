import React from 'react';
import VerifyUsersTable from './VerifySpot/VerifySpot';
import PriceListTable from './PriceList/PriceList';
import './spotprice.css'; // External CSS for the page

const SpotPrice = () => {
  return (
    <div className="spot-price-container">
      <div className='spotpagemaintitle'>Spot Price</div>
      <div className="verify-users-section">
        <VerifyUsersTable />
      </div>
      <div className="price-list-section">
        <PriceListTable />
      </div>
    </div>
  );
};

export default SpotPrice;
