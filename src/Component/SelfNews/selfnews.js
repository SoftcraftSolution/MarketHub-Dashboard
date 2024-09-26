import React, { useState } from 'react';
import './selfnews.css';
import imagepreview from '../../assets/imagepreview.png';

const NewsForm = () => {
    const [addTitle, setAddTitle] = useState('');
    const [addContent, setAddContent] = useState('');
    const [addLink, setAddLink] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreviewURL, setImagePreviewURL] = useState(imagepreview); // Default preview image
    const [adminPhoneNumber, setAdminPhoneNumber] = useState("+917905333486"); // Static value; modify as needed
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [uploadedNews, setUploadedNews] = useState(null);

    const handleTitleChange = (event) => setAddTitle(event.target.value);
    const handleContentChange = (event) => setAddContent(event.target.value);
    const handleLinkChange = (event) => setAddLink(event.target.value);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setImagePreviewURL(URL.createObjectURL(file)); // Preview selected image
        }
    };

    const handleUserChange = (event) => {
        const user = event.target.value;
        if (event.target.checked) {
            setSelectedUsers([...selectedUsers, user]);
        } else {
            setSelectedUsers(selectedUsers.filter((u) => u !== user));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('addTitle', addTitle);
        formData.append('addContent', addContent);
        formData.append('addLink', addLink);
        formData.append('image', image);
        formData.append('adminPhoneNumber', adminPhoneNumber);
        formData.append('shareNews', JSON.stringify(selectedUsers));

        try {
            const response = await fetch('https://market-hub-backend-kappa.vercel.app/admin/add-self-news', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setUploadedNews(data.addSelfNews);
                setResponseMessage(data.message);
            } else {
                setResponseMessage(data.message || 'Failed to upload news');
                setUploadedNews(null);
            }
        } catch (error) {
            console.error('Error uploading news:', error);
            setResponseMessage('An error occurred while uploading news');
            setUploadedNews(null);
        }
    };

    return (
        <div className="container">
            <h2>Add Self News</h2>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className='news-top'>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="addTitle"
                            value={addTitle}
                            onChange={handleTitleChange}
                            placeholder="Enter the title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control-content"
                            id="addContent"
                            value={addContent}
                            onChange={handleContentChange}
                            placeholder="Enter the content"
                            required
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control-1"
                        id="addLink"
                        value={addLink}
                        onChange={handleLinkChange}
                        placeholder="Enter the link"
                    />
                </div>
                
                <div style={{ marginTop: "30px" }}>
                    <label htmlFor="image" style={{ paddingTop: "50px", marginBottom: "10px" }}>Upload Image (optional):</label>
                    
                    <div className='preview'>
                        <div className='image-preview'>
                            <img src={imagePreviewURL} alt="Image Preview" style={{ width: '100px', margin: '10px' }} />
                        </div>  
                        <div className='upload'>
                            <div className="divtitle" style={{ marginLeft: '120px' }}>Please upload a JPG or PNG File size less than 2MB</div>  
                            <input
                                type="file"
                                className="form-control-file"
                                id="image"
                                accept="image/jpeg, image/png"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>

                <h4>Share With:</h4>
                <div className="form-group">
                    {['freeTrialUsers', 'extendedTrialUsers', 'standardTrialUsers', 'premiumTrialUsers', 'basicTrialUsers'].map((userType) => (
                        <div key={userType} className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={userType}
                                value={userType}
                                onChange={handleUserChange}
                            />
                            <label className="form-check-label" htmlFor={userType}>
                                {userType.split(/(?=[A-Z])/).join(' ')}
                            </label>
                        </div>
                    ))}
                </div>
                
                <button type="submit" className="btn btn-primary custom-button">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default NewsForm;
