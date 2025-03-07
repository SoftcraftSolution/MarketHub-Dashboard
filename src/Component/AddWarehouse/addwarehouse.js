import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './addwarehouse.css';

const WarehouseStockEditor = () => {
  const [data, setData] = useState([]); // State to store warehouse stock data
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.markethubindia.com/user/get-lme-warehouse');
        if (response.data.message === "LME warehouse stock retrieved successfully") {
          // Extract the relevant data from the API response
          const warehouseData = response.data.data[0].LME_Warehouse_Stock.map(item => ({
            symbol: item.Symbol,
            last: item.Live.toString(), // Convert to string for input field
            chn: item.Change.toString(), // Convert to string for input field
            oerCh: item['% Change'].toString(), // Convert to string for input field
            chnS: item.PercentChange?.toString() || '0', // Handle optional field
          }));
          setData(warehouseData); // Set the fetched data to state
        } else {
          console.error('Failed to fetch warehouse stock data');
        }
      } catch (error) {
        console.error('Error fetching warehouse stock data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
  };

  const handleSubmit = async () => {
    try {
      // Loop through each item and send an update request
      for (const item of data) {
        const updateData = {
          Open: parseFloat(item.last), // Use the updated "last" value for Open
          In: 8000, // Example value (you can make this editable if needed)
          Out: 2500, // Example value (you can make this editable if needed)
          Close: 284200, // Example value (you can make this editable if needed)
          Live: parseFloat(item.last), // Use the updated "last" value for Live
          Cancel: 21325, // Example value (you can make this editable if needed)
          Change: parseFloat(item.chn), // Use the updated "chn" value for Change
          PercentChange: parseFloat(item.oerCh), // Use the updated "oerCh" value for PercentChange
        };

        // Send the updated data to the API
        const response = await axios.post(
          `https://api.markethubindia.com/user/update-lmewarehouse?symbol=${item.symbol}`,
          updateData
        );

        if (response.data.message === "LME warehouse stock updated successfully.") {
          setSuccessMessage(`Stock for ${item.symbol} updated successfully!`);
          setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
        } else {
          console.error('Failed to update stock for:', item.symbol);
        }
      }
    } catch (error) {
      console.error('Error updating warehouse stock:', error);
      alert('Failed to update warehouse stock.');
    }
  };

  return (
    <div className="warehouse-editor-container">
      {/* Success message */}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <h2 className="warehouse-editor-title">Future Price</h2>
      <h3 className="warehouse-editor-subtitle">Add Warehouse Stock</h3>
      <table className="warehouse-editor-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last</th>
            <th>Chn</th>
            <th>Oer Ch</th>
            <th>Chn S</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.symbol}</td>
              <td>
                <input
                  type="text"
                  value={row.last}
                  onChange={(e) => handleChange(index, 'last', e.target.value)}
                  className="warehouse-editor-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.chn}
                  onChange={(e) => handleChange(index, 'chn', e.target.value)}
                  className="warehouse-editor-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.oerCh}
                  onChange={(e) => handleChange(index, 'oerCh', e.target.value)}
                  className="warehouse-editor-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.chnS}
                  onChange={(e) => handleChange(index, 'chnS', e.target.value)}
                  className="warehouse-editor-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="warehouse-editor-submit-btn" onClick={handleSubmit}>
        Post
      </button>
    </div>
  );
};

export default WarehouseStockEditor;