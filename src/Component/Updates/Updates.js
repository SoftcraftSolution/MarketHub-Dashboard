import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Updates.css';
import Pagination from '../Pagination';
import deleteIcon from '../../assets/deleteimg.png';
import sampleImage from '../../assets/mhublogo.png';
import edit from '../../assets/edit.png';
import filter from '../../assets/filter.png';

const Updates = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredNewsData, setFilteredNewsData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  // Fetch updates from the API
  const fetchUpdates = async () => {
    try {
      const response = await axios.get('https://api.markethubindia.com/user/get-home-update');
      const updates = response.data.homeUpdates.map((update) => ({
        id: update._id, // Assuming the API response has an `_id` field
        postedby: 'Unknown', // Replace with actual data if available in the API
        title: update.text,
        content: update.text,
        link: null, // Replace with actual data if available in the API
        pdf: false, // Adjust if PDFs are indicated in the API response
        image: update.image || sampleImage,
        uploadDate: new Date(update.createdAt).toLocaleString(),
      }));
      setNewsData(updates);
      setFilteredNewsData(updates); // Initialize filtered data with all updates
    } catch (error) {
      console.error('Error fetching updates:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  // Handle search and date filter
  useEffect(() => {
    const filteredData = newsData.filter((news) => {
      const matchesSearchTerm =
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDate = new Date(news.uploadDate).toDateString() === selectedDate.toDateString();
      return matchesSearchTerm && matchesDate;
    });
    setFilteredNewsData(filteredData);
  }, [searchTerm, selectedDate, newsData]);

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteClick = (news) => {
    setSelectedNews(news);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      // Perform delete operation using the API
      const response = await axios.delete(
        `https://api.markethubindia.com/user/delete-home-update/${selectedNews.id}`
      );
      if (response.data.success) {
        // Remove the deleted news from the state
        setNewsData((prevNews) => prevNews.filter((news) => news.id !== selectedNews.id));
        setFilteredNewsData((prevNews) => prevNews.filter((news) => news.id !== selectedNews.id));
      } else {
        console.error('Failed to delete update:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting update:', error.response?.data || error.message);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedNews(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedNews(null);
  };

  const getStringDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  if (loading) {
    return <div className="updates-page">Loading...</div>;
  }

  return (
    <div className="updates-page">
      <div className="updates-header">Update</div>

      <div className="updates-list">
        <div className="updates-close">
          <div className="updatestitle">Updates List</div>
          <div className="updatessearch-and-date">
            <input
              type="text"
              placeholder="Search by title, content..."
              className="updatessearch-bar"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div id="updates-datteePickeer">
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="date-picker-input"
                value={getStringDate(selectedDate)}
                onChange={handleDateChange}
              />
            </div>
          </div>
        </div>

        <table className="updatestable">
          <thead>
            <tr>
              <th className="updates-heading">Posted By</th>
              <th className="updates-heading">Title</th>
              <th className="content-column">Content</th>
              <th className="updates-heading">News Link</th>
              <th className="updates-heading">Image</th>
              <th className="updates-heading">Pdf</th>
              <th className="updates-heading">Date and Time</th>
              <th className="updates-heading">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredNewsData.map((news, index) => (
              <tr key={index}>
                <td>{news.postedby}</td>
                <td>{news.title}</td>
                <td className="content-column">{news.content}</td>
                <td>
                  {news.link ? (
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                      View Link
                    </a>
                  ) : (
                    '-'
                  )}
                </td>
                <td>
                  {news.image ? (
                    <img
                      src={news.image}
                      alt="news-img"
                      style={{ width: '50px', height: '50px', borderRadius: '10px' }}
                    />
                  ) : (
                    '-'
                  )}
                </td>
                <td>{news.pdf ? <img src="/pdf-icon.png" alt="PDF" /> : '-'}</td>
                <td>{news.uploadDate}</td>
                <td>
                  <button
                    style={{ border: 'none', backgroundColor: '#FFFFFF' }}
                    className="delete-button"
                    onClick={() => handleDeleteClick(news)}
                  >
                    <img src={deleteIcon} alt="delete" />
                  </button>
                  <button
                    style={{ border: 'none', backgroundColor: '#FFFFFF' }}
                    className="edit-button"
                  >
                    <img src={edit} alt="edit" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-title">Delete Update</div>
            <div className="modal-message">Are you sure you want to delete this update?</div>
            <div className="modal-actions">
              <button className="modal-btn modal-cancel" onClick={handleDeleteCancel}>
                Cancel
              </button>
              <button className="modal-btn modal-confirm" onClick={handleDeleteConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updates;