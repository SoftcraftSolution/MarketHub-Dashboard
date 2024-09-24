import React, { useState } from 'react';
import './addcircular.css';
import imagepreview from '../../assets/imagepreview.png';

const AddCircular = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(null);
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
        setImage(event.target.files[0]);
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
        formData.append('title', title);
        formData.append('content', content);
        formData.append('link', link);
        formData.append('image', image);
        formData.append('users', selectedUsers);

        const response = await fetch('/api/news', {
            method: 'POST',
            body: formData,
        });

        // Handle the response here.
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
                        <img src={imagepreview} alt="Image Preview" style={{ width: '100px', margin: '10px' }} />
                    </div>  
                    <div className='upload'>
                        <div className="divtitle"style={{ marginLeft: '120px' }}>Please upload a JPG or PNG File size less than 2mb</div>  
                        <div className="file-upload-box">
                    </div>        

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
                   
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="free-trial-users"
                            value="free_trial_users"
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
                            value="extended_trial_users"
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
                            value="basic_users"
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
                            value="standard_users"
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
                            value="premium_users"
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
