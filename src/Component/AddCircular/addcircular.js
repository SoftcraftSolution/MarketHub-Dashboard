import React, { useState } from 'react';
import './addcircular.css';
import imagepreview from '../../assets/imagepreview.png';

const AddCircular = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(imagepreview); // Set initial preview to the placeholder image
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);

        // Update preview image
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);  // Update the preview state
        } else {
            setImagePreview(imagepreview); // Reset to default if no file is selected
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

        const usersString = JSON.stringify(selectedUsers);

        const formData = new FormData();
        formData.append('image', image);

        const queryParams = new URLSearchParams({
            addTitle: title,
            addContent: content,
            addLink: link,
            adminPhoneNumber: "+917905333486",
            shareNews: usersString,
        });

        try {
            const response = await fetch(`https://market-hub-backend-kappa.vercel.app/admin/circular-news?${queryParams.toString()}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                console.log('News uploaded successfully:', result);
                alert('News uploaded successfully!');
            } else {
                console.error('Error uploading news:', response.statusText);
                alert('Failed to upload news.');
            }
        } catch (error) {
            console.error('Error uploading news:', error);
            alert('An error occurred while uploading the news.');
        }
    };

    return (
        <div className="container">
            <h2>Add Circular</h2>
            <form onSubmit={handleSubmit}>
                <div className='news-top'>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Enter the title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control-content"
                            id="content"
                            value={content}
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
                        id="link"
                        value={link}
                        onChange={handleLinkChange}
                        placeholder="Enter the link"
                    />
                </div>

                <div style={{ marginTop: "30px" }}>
                    <label htmlFor="image" style={{ paddingTop: "50px", marginBottom: "10px" }}>Upload Image (optional):</label>
                    
                    <div className='preview'>
                        <div className='imagee-preview'>
                            <img src={imagePreview} alt="Image Preview" style={{ width: '100px', margin: '10px' }} />
                        </div>  
                        <div className='upload'>
                            <div className="divtitle" style={{ marginLeft: '120px' }}>Please upload a JPG or PNG file less than 2MB</div>  
                            <div className="file-upload-box">
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
                </div>

                <h4>Share With:</h4>
                <div className="form-group">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="free-trial-users"
                            value="freeTrialUsers"
                            onChange={handleUserChange}
                        />
                        <label className="form-check-label" htmlFor="free-trial-users">
                            Free Trial Users
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="extended-trial-users"
                            value="extendedTrialUsers"
                            onChange={handleUserChange}
                        />
                        <label className="form-check-label" htmlFor="extended-trial-users">
                            Extended Trial Users
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="basic-users"
                            value="basicTrailUsers"
                            onChange={handleUserChange}
                        />
                        <label className="form-check-label" htmlFor="basic-users">
                            Basic Users
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="standard-users"
                            value="standardTrailUsers"
                            onChange={handleUserChange}
                        />
                        <label className="form-check-label" htmlFor="standard-users">
                            Standard Users
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="premium-users"
                            value="premiumTrailUsers"
                            onChange={handleUserChange}
                        />
                        <label className="form-check-label" htmlFor="premium-users">
                            Premium Users
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary custom-button">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default AddCircular;
