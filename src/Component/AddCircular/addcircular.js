import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './addcircular.css';
import preview from '../../assets/previewimg.png';

const AddCircularNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    link: '',
    image: null,
    pdf: null,
    imagePreview: preview,
    pdfPreview: null,
    shareWith: {
      freeTrial: true,
      extendedTrial: true,
      basic: false,
      standard: false,
      premium: false,
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

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'image') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            image: file,
            imagePreview: reader.result,
          });
        };
        reader.readAsDataURL(file);
      } else if (type === 'pdf') {
        setFormData({
          ...formData,
          pdf: file,
          pdfPreview: file.name,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://admin.markethubindia.com/admin/circular-news'; // Replace with your API endpoint

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('title', formData.title);
    formDataToSubmit.append('content', formData.content);
    formDataToSubmit.append('link', formData.link);
    formDataToSubmit.append('image', formData.image);
    formDataToSubmit.append('pdf', formData.pdf);
    formDataToSubmit.append('shareWith', JSON.stringify(formData.shareWith));

    try {
      const response = await axios.post(apiUrl, formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Circular News Posted:', response.data);
      alert('News posted successfully!');
    } catch (error) {
      console.error('Error posting news:', error);
      alert('Failed to post news. Please try again.');
    }
  };

  return (
    <div className="circularnewsbiggestcontainer">
      <div className="circularnewstoptitle">News</div>
      <div className="circular-container">
        <div className="circularnews-heading">Add Circular News</div>
        <form className="circularnews-form" onSubmit={handleSubmit}>
          <div className="circularinput-group">
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={formData.title}
              onChange={handleChange}
              className="circularnewsinput-field"
            />
            <input
              type="text"
              name="content"
              placeholder="Add Content"
              value={formData.content}
              onChange={handleChange}
              className="circularnewsinput-field"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="link"
              placeholder="Add Link (optional)"
              value={formData.link}
              onChange={handleChange}
              className="circularnewsoptionalfield"
            />
          </div>
          <div style={{ paddingTop: '25px' }}>
            <span style={{ fontWeight: '500' }}>Upload Image </span>
            <span className="circularoptional-text">(optional)</span>
          </div>
          <div className="circularfullpreviewflex">
            <div className="circulartextbuttonflex">
              <div
                className="circularfile-upload-info"
                style={{ paddingLeft: '10px', paddingTop: '10px' }}
              >
                Please upload a JPG or PNG, size less than 2MB
              </div>
              <div className="circularnewsfile-upload">
                <label htmlFor="image-upload" className="circular-file-upload">
                  Choose Image
                </label>
                <input
                  id="image-upload"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'image')}
                  accept="image/jpeg,image/png"
                  className="circularfile-input"
                />
              </div>
            </div>
            <div className="circularnewspreviewflex">
              <div className="circularimage-preview-container">
                <img
                  src={formData.imagePreview}
                  alt="Preview"
                  className="circularnewsimage-preview"
                />
              </div>
            </div>
            <div className="circularpdfbuttonflex">
              <div
                className="circularpdffile-upload-info"
                style={{ paddingLeft: '10px', paddingTop: '10px' }}
              >
                Please upload a PDF, size less than 5MB
              </div>
              <div className="circularnewspdffile-upload">
                <label htmlFor="pdf-upload" className="circularpdf-file-upload">
                  Choose PDF
                </label>
                <input
                  id="pdf-upload"
                  type="file"
                  onChange={(e) => handleFileChange(e, 'pdf')}
                  accept="application/pdf"
                  className="circularpdffile-input"
                />
              </div>
            </div>
            <div className="circularnewspdfpreviewflex">
              {formData.pdfPreview && (
                <div className="circularpdf-preview-container">
                  <span className="circularpdf-preview-text">
                    {formData.pdfPreview}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="circularnewscheckbox-group">
            <label style={{ fontWeight: '700' }}>Share With</label>
            <div className="circularnewscheckboxes">
              {Object.keys(formData.shareWith).map((key) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.shareWith[key]}
                    onChange={handleChange}
                  />{' '}
                  {key.replace(/([A-Z])/g, ' $1').trim()} Users
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="circularnewssubmit-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCircularNews;
