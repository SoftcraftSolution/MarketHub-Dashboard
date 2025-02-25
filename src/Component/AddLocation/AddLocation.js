import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './AddLocation.css';

const AddLocation = () => {
    const [city, setCity] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false); // State for loading
    const [error, setError] = useState(''); // State for error messages
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!city || !category || !type || !subcategory || !price) {
            setError('All fields are required.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const response = await axios.post('https://api.markethubindia.com/user/create-item', {
                city: city.toUpperCase(), // Convert city to uppercase as per API example
                category: category.toUpperCase(), // Convert category to uppercase
                type: type.toUpperCase(), // Convert type to uppercase
                subcategory: subcategory.toUpperCase(), // Convert subcategory to uppercase
                price: price, // Price is a string as per API example
            });

            // Handle successful response
            console.log('Location added:', response.data);
            setSuccessMessage('Location added successfully!');
            
            // Reset form fields
            setCity('');
            setCategory('');
            setType('');
            setSubcategory('');
            setPrice('');
        } catch (error) {
            // Handle error
            console.error('Error adding location:', error);
            setError('Failed to add location. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='addloaction-toptitle'>Spot Price</div>
            <div className='locationoutsideconatiner'> 
                <div className="add-location-container">
                    <div className="addlocation-form-container">
                        <div className='addlocation-formtitle'>Add New Location</div>
                        {error && <div className="error-message">{error}</div>}
                        {successMessage && <div className="success-message">{successMessage}</div>}
                        <form className='addlocation-form' onSubmit={handleSubmit}>
                            <div className="addlocation-form-row">
                                <input 
                                    className='searchbox' 
                                    type="text" 
                                    placeholder="Add City" 
                                    value={city} 
                                    onChange={(e) => setCity(e.target.value)} 
                                    required
                                />
                                <input 
                                    className='searchbox' 
                                    type="text" 
                                    placeholder="Add Category" 
                                    value={category} 
                                    onChange={(e) => setCategory(e.target.value)} 
                                    required
                                />
                            </div>
                            <div className="addlocation-form-row">
                                <input 
                                    className='searchbox' 
                                    type="text" 
                                    placeholder="Add Type" 
                                    value={type} 
                                    onChange={(e) => setType(e.target.value)} 
                                    required
                                />
                                <input 
                                    className='searchbox' 
                                    type="text" 
                                    placeholder="Add Sub Category" 
                                    value={subcategory} 
                                    onChange={(e) => setSubcategory(e.target.value)} 
                                    required
                                />
                            </div>
                            <div>
                                <input 
                                    className='pricesearchbox' 
                                    type="text" 
                                    placeholder="Add Price" 
                                    value={price} 
                                    onChange={(e) => setPrice(e.target.value)} 
                                    required
                                />
                            </div>   
                            <button className="addlocation-continue-btn" type="submit" disabled={loading}>
                                {loading ? 'Adding...' : 'Continue'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLocation;