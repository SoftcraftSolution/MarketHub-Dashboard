import React from 'react';
import './CategoryComponent.css';

const CategoriesComponent = () => {
    return (
        <div className="categories-container">
            <div>Categories to show in App</div>
            <div className="category-buttons">
                <button className="category-button">COPPER</button>
                <button className="category-button">Aluminum</button>
                <button className="category-button">Zinc</button>
                <button className="category-button">Brass</button>
                <button className="category-button">Gun Metal</button>
                <button className="category-button">Nickel Cathode</button>
                <button className="category-button">Tin</button>
                <button className="category-button">Lead</button>
            </div>
            <button className="categoryfilter-button">Filter by city</button>
            <button className="categoryupdate-button">Update</button>
        </div>
    );
};

export default CategoriesComponent;
