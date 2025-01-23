import React, { useRef, useState } from 'react';
import axios from 'axios'; // Import Axios
import './AddUpdate.css'; // Importing external CSS
import preview from '../../assets/previewimg.png'; // Placeholder image

const AddUpdate = () => {
  const [formData, setFormData] = useState({
    title: '',
    imageBase64: null,
    imagePreview: preview, // Default placeholder image
  });
  const canvasRef = useRef(); // Reference for the canvas

  // Handle input change for the title field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle pasting Excel data into the designated area
  const handlePaste = (event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const text = clipboardData.getData('Text');

    // Parse Excel data into rows and cells
    const rows = text.split('\n').map((row) => row.split('\t'));

    // Render the table as an image on a canvas
    renderTableToCanvas(rows);
  };

  // Render the table data onto a canvas
  const renderTableToCanvas = (rows) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Define canvas dimensions and cell sizes
    const rowHeight = 30;
    const colWidth = 100;
    canvas.width = colWidth * rows[0].length;
    canvas.height = rowHeight * rows.length;

    // Style and draw the table
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    rows.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const x = colIndex * colWidth + colWidth / 2;
        const y = rowIndex * rowHeight + rowHeight / 2;

        ctx.strokeRect(colIndex * colWidth, rowIndex * rowHeight, colWidth, rowHeight);
        ctx.fillText(cell, x, y);
      });
    });

    // Convert the canvas to Base64 format
    const imageSrc = canvas.toDataURL('image/png');

    // Update formData with the generated Base64 image
    setFormData({
      ...formData,
      imageBase64: imageSrc.split(',')[1], // Extract Base64 part
      imagePreview: imageSrc, // Update the image preview
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.imageBase64) {
      alert('Please provide both a title and an image (either uploaded or generated).');
      return;
    }

    // Prepare the API payload
    const payload = {
      text: formData.title,
      imageBase64: formData.imageBase64,
    };

    try {
      const response = await axios.post(
        'http://api.markethubindia.com/user/home-update',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response:', response.data);
      alert('Update posted successfully!');
    } catch (error) {
      console.error('Error posting update:', error);
      alert('Failed to post the update. Please try again.');
    }
  };

  return (
    <div className="addupdatebiggestcontainer">
      <div className="addupdatetoptitle">Updates</div>
      <div className="addupdate-container">
        <div className="addupdate-heading">Add Updates</div>
        <form className="addupdate-form" onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="addupdateinput-group">
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={formData.title}
              onChange={handleChange}
              className="addupdateinput-field"
            />
          </div>

          {/* Paste Excel Data Area */}
          <div style={{ paddingTop: '25px' }}>
            <span style={{ fontWeight: '500' }}>Paste Excel Data</span>
            <span className="addupdateoptional-text">(optional)</span>
          </div>
          <div
            onPaste={handlePaste}
            style={{
              border: '1px dashed gray',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            Paste Excel Data Here
          </div>

          {/* Hidden Canvas for Rendering Table */}
          <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

          {/* Image Preview */}
          <div className="addupdateimage-preview-container">
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="addupdateimage-preview"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="circularnewssubmit-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUpdate;
