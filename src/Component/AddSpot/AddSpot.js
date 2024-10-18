import React from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import CategoriesComponent from './CategoryComponent/CategoryComponent';
import './AddSpot.css';

const AddSpotPrice = () => {
    return (
        <div className="spot-price-container">
            <HeaderComponent />
            <CategoriesComponent />
        </div>
    );
};

export default AddSpotPrice;
