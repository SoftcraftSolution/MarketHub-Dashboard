import React from 'react';
import './AddLocation.css';

const AddLocation = () => {
    return (
        <div>
        <div className='addloaction-toptitle'>Spot Price</div>
       <div className='locationoutsideconatiner'> 
        <div className="add-location-container">
            <div className="addlocation-form-container">
                <div className='addlocation-formtitle'>Add New Location</div>
                <form className='addlocation-form'>
                    <div className="addlocation-form-row">
                        <input className='searchbox' type="text" placeholder="Add City" />
                        <input className='searchbox' type="text" placeholder="Add Category" />
                    </div>
                    <div className="addlocation-form-row">
                        <input className='searchbox' type="text" placeholder="Add Type" />
                        <input className='searchbox' type="text" placeholder="Add Sub Category" />
                    </div>
                    <button className="addlocation-continue-btn">Continue</button>
                </form>
            </div>
        </div>
        </div>
    </div>
    );
};

export default AddLocation;
