import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './spottable.css'; // Ensure this path points to your CSS file

const EditableTable = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState({ row: null, column: null });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.markethubindia.com/user/get-all-item');

        const items = Array.isArray(response.data) ? response.data : response.data.items;

        const formattedData = items.map(item => ({
          id: item._id,
          type: item.type,
          category: item.category,
          name: item.subcategory,
          price: item.price,
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (index, name, value) => {
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };

  const handleUpdate = async () => {
    try {
      // Loop through each item and send an update request
      for (const item of data) {
        const updateData = {
          category: item.category,
          type: item.type,
          subcategory: item.name,
          newPrice: parseFloat(item.price), // Ensure price is a float
        };

        // Send the updated data to the API
        const response = await axios.post('https://api.markethubindia.com/user/update-spot-price', updateData);

        if (response.data.message === "Price updated successfully") {
          setSuccessMessage('Prices updated successfully!'); // Set success message
          setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
        } else {
          alert('Failed to update prices.');
        }
      }
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update data.');
    }
  };

  const handleCellClick = (rowIndex, column) => {
    setEditIndex({ row: rowIndex, column });
  };

  const handleBlur = () => {
    setEditIndex({ row: null, column: null });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div className="table-container-unique">
      {/* Success message */}
      {successMessage && (
        <div className="success-message-unique">
          {successMessage}
        </div>
      )}

      <table className="table-unique">
        <thead>
          <tr>
            <th>Select</th>
            <th>Type</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td><input type="checkbox" /></td>
              
              {/* Editable type cell */}
              <td onClick={() => handleCellClick(rowIndex, 'type')}>
                {editIndex.row === rowIndex && editIndex.column === 'type' ? (
                  <input
                    type="text"
                    value={item.type}
                    onChange={(e) => handleInputChange(rowIndex, 'type', e.target.value)}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                ) : (
                  item.type
                )}
              </td>

              {/* Editable category cell */}
              <td onClick={() => handleCellClick(rowIndex, 'category')}>
                {editIndex.row === rowIndex && editIndex.column === 'category' ? (
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) => handleInputChange(rowIndex, 'category', e.target.value)}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                ) : (
                  item.category
                )}
              </td>

              {/* Editable name cell */}
              <td onClick={() => handleCellClick(rowIndex, 'name')}>
                {editIndex.row === rowIndex && editIndex.column === 'name' ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleInputChange(rowIndex, 'name', e.target.value)}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                ) : (
                  item.name
                )}
              </td>

              {/* Editable price cell */}
              <td onClick={() => handleCellClick(rowIndex, 'price')}>
                {editIndex.row === rowIndex && editIndex.column === 'price' ? (
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleInputChange(rowIndex, 'price', e.target.value)}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    className={`price-input-unique ${item.price !== 874 ? 'red' : ''}`}
                    autoFocus
                  />
                ) : (
                  item.price
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="update-button-unique" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditableTable;