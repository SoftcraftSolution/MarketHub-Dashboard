import React, { useState } from 'react';
import './hindinews.css'; // Updated CSS file name
import preview from '../../assets/previewimg.png';
import axios from 'axios'; // Import Axios for HTTP requests

const HindiAddNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    link: '',
    image: null,
    imagePreview: preview, // Default placeholder path
    shareWith: {
      freeTrialUsers: true,
      extendedTrialUsers: true,
      basicTrailUsers: false,
      standardTrailUsers: false,
      premiumTrailUsers: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        shareWith: {
          ...formData.shareWith,
          [name]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result, // Set uploaded image preview
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shareNews = Object.keys(formData.shareWith).filter(
      (key) => formData.shareWith[key]
    );

    const newsData = new FormData();
    newsData.append('addTitle', formData.title);
    newsData.append('addContent', formData.content);
    newsData.append('addLink', formData.link);
    if (formData.image) {
      newsData.append('image', formData.image); // Append the file if it exists
    }
    newsData.append('shareNews', JSON.stringify(shareNews));

    try {
      const response = await axios.post(
        'https://admin.markethubindia.com/admin/add-hindi-news', // New API endpoint
        newsData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Response:', response.data);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting the news:', error);
      alert('There was an error posting the news. Please try again.');
    }
  };

  return (
    <div className="hindinews-biggest-container">
      <div className="hindinews-top-title">News</div>
      <div className="hindinews-container">
        <div className="hindinews-heading">Add Hindi News</div>
        <form className="hindinews-form" onSubmit={handleSubmit}>
          <div className="hindinews-input-group">
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={formData.title}
              onChange={handleChange}
              className="hindinews-input-field"
            />
            <textarea
              name="content"
              placeholder="Add Content"
              value={formData.content}
              onChange={handleChange}
              className="hindinews-input-field"
              rows={5}
            ></textarea>
          </div>
          <div className="hindinews-input-group">
            <input
              type="text"
              name="link"
              placeholder="Add Link (optional)"
              value={formData.link}
              onChange={handleChange}
              className="hindinews-optional-field"
            />
          </div>
          <div style={{ paddingTop: '25px' }}>
            <span style={{ fontWeight: '500' }}>Upload Image </span>
            <span className="hindinews-optional-text">(optional)</span>
          </div>
          <div className="hindinews-full-preview-flex">
            <div className="hindinews-text-button-flex">
              <div
                className="hindinews-file-upload-info"
                style={{ paddingLeft: '10px', paddingTop: '10px' }}
              >
                Please upload a JPG or PNG file less than 2MB
              </div>
              <div className="hindinews-file-upload">
                <label htmlFor="file-upload" className="hindinews-custom-file-upload">
                  Choose File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png"
                  className="hindinews-file-input"
                />
              </div>
            </div>
            <div className="hindinews-preview-flex">
              <div className="hindinews-image-preview-container">
                <img
                  src={formData.imagePreview}
                  alt="Preview"
                  className="hindinews-image-preview"
                />
              </div>
            </div>
          </div>
          <div className="hindinews-checkbox-group">
            <label style={{ fontWeight: '700' }}>Share With</label>
            <div className="hindinews-checkboxes">
              {Object.keys(formData.shareWith).map((key) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.shareWith[key]}
                    onChange={handleChange}
                  />{' '}
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="hindinews-submit-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default HindiAddNews;
