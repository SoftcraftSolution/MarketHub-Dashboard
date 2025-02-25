import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';
import Pagination from '../Pagination';
import deleteIcon from '../../assets/deleteimg.png';

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [hindiNewsData, setHindiNewsData] = useState([]);
  const [insightsData, setInsightsData] = useState({ totalCircularNews: 0, totalSelfNews: 0, totalNewsCount: 0 });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredNewsData, setFilteredNewsData] = useState([]);
  const [filteredHindiNewsData, setFilteredHindiNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('https://admin.markethubindia.com/admin/get-news-list');
        if (response.data.message === "News listing retrieved successfully") {
          const circularNews = response.data.circularNews.map(news => ({
            id: news._id,
            type: 'Circular',
            title: news.addTitle,
            content: news.addContent,
            link: news.addLink,
            pdf: news.pdf !== '',
            image: news.image,
            uploadDate: new Date(news.createdAt).toLocaleString(),
          }));

          const selfNews = response.data.selfNews.map(news => ({
            id: news._id,
            type: 'Self',
            title: news.addTitle,
            content: news.addContent,
            link: news.addLink,
            pdf: false,
            image: news.image,
            uploadDate: new Date(news.createdAt).toLocaleString(),
          }));

          setNewsData([...circularNews, ...selfNews]);
          setFilteredNewsData([...circularNews, ...selfNews]);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    const fetchHindiNewsData = async () => {
      try {
        const response = await axios.get('https://admin.markethubindia.com/admin/get-hindi-news');
        if (response.data.message === "Hindi news listing fetched successfully") {
          const hindiNews = response.data.news.map(news => ({
            id: news._id,
            type: 'Hindi',
            title: news.addTitle,
            content: news.addContent,
            link: news.addLink || '-',
            pdf: false,
            image: news.image,
            uploadDate: new Date(news.createdAt).toLocaleString(),
          }));

          setHindiNewsData(hindiNews);
          setFilteredHindiNewsData(hindiNews);
        }
      } catch (error) {
        console.error('Error fetching Hindi news data:', error);
      }
    };

    const fetchInsightsData = async () => {
      try {
        const response = await axios.get('https://markethub-backend-ceka.onrender.com/admin/get-insights-news');
        if (response.data.message === "News listing retrieved successfully") {
          setInsightsData(response.data.counts);
        }
      } catch (error) {
        console.error('Error fetching insights data:', error);
      }
    };

    fetchNewsData();
    fetchHindiNewsData();
    fetchInsightsData();
  }, []);

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    filterNewsData(searchKeyword, date);
  };

  const handleSearchKeywordChange = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    filterNewsData(keyword, selectedDate);
  };

  const filterNewsData = (keyword, date) => {
    const filteredNews = newsData.filter(news => 
      (news.title.toLowerCase().includes(keyword.toLowerCase()) || news.type.toLowerCase().includes(keyword.toLowerCase())) &&
      new Date(news.uploadDate).toDateString() === date.toDateString()
    );

    const filteredHindiNews = hindiNewsData.filter(news => 
      (news.title.toLowerCase().includes(keyword.toLowerCase()) || news.type.toLowerCase().includes(keyword.toLowerCase())) &&
      new Date(news.uploadDate).toDateString() === date.toDateString()
    );

    setFilteredNewsData(filteredNews);
    setFilteredHindiNewsData(filteredHindiNews);
  };

  const openModal = (index) => {
    setSelectedNewsIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    if (selectedNewsIndex !== null) {
      let selectedNews;
      let deleteUrl;

      if (selectedNewsIndex < newsData.length) {
        selectedNews = newsData[selectedNewsIndex];
        deleteUrl = selectedNews.type === 'Circular'
          ? `https://admin.markethubindia.com/admin/delete-circular-news?id=${selectedNews.id}`
          : `https://admin.markethubindia.com/admin/delete-self-news?id=${selectedNews.id}`;
      } else {
        const hindiNewsIndex = selectedNewsIndex - newsData.length;
        selectedNews = hindiNewsData[hindiNewsIndex];
        deleteUrl = `https://admin.markethubindia.com/admin/delete-hindi-news?id=${selectedNews.id}`;
      }

      try {
        const response = await axios.delete(deleteUrl);
        if (response.data.message === "News deleted successfully") {
          if (selectedNews.type === 'Hindi') {
            setHindiNewsData(hindiNewsData.filter((_, index) => index !== selectedNewsIndex - newsData.length));
            setFilteredHindiNewsData(filteredHindiNewsData.filter((_, index) => index !== selectedNewsIndex - newsData.length));
          } else {
            setNewsData(newsData.filter((_, index) => index !== selectedNewsIndex));
            setFilteredNewsData(filteredNewsData.filter((_, index) => index !== selectedNewsIndex));
          }
        } else {
          console.error('Failed to delete news:', response.data);
        }
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }

    setShowModal(false);
  };

  const getStringDate = (date) => {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="news-page">
      <div className="news-header">News</div>
      <div className="stats">
        <StatBox title="Total Self News Shared" number={insightsData.totalSelfNews} shareCount="3" color="#C7C5FF" />
        <StatBox title="Total Circular Shared" number={insightsData.totalCircularNews} shareCount="3" color="#B2FFD9" />
        <StatBox title="Total News Count" number={insightsData.totalNewsCount} shareCount="3" color="#ffe8af" />
      </div>

      <div className="news-list">
        <div className="news-close">
          <div className="newstitle">News List</div>
          <div className="search-and-date">
            <input 
              type="text" 
              placeholder="Search by title, type..." 
              className="search-bar" 
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
            />
            <div id="datteePickeer">
              <input 
                type="date" 
                className="date-picker-input" 
                value={getStringDate(selectedDate)} 
                onChange={handleDateChange} 
              />
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>News Type</th>
              <th>Title</th>
              <th className="content-column">Content</th>
              <th>News Link</th>
              <th>Image</th>
              <th>PDF</th>
              <th>Upload Date and Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredNewsData.map((news, index) => (
              <tr key={index}>
                <td>{news.type}</td>
                <td>{news.title}</td>
                <td className="content-column">{news.content}</td>
                <td><a href={news.link} target="_blank" rel="noopener noreferrer">View Link</a></td>
                <td>
                  {news.image ? <img src={news.image} alt="news-img" style={{ width: '50px', height: '50px', borderRadius: '10px' }} /> : '-'}
                </td>
                <td>{news.pdf ? <a href={news.pdf} target="_blank" rel="noopener noreferrer">View PDF</a> : '-'}</td>
                <td>{news.uploadDate}</td>
                <td>
                  <button style={{ border: "none", backgroundColor: "#FFFFFF" }} onClick={() => openModal(index)} className="delete-button">
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredHindiNewsData.map((news, index) => (
              <tr key={news.id}>
                <td>{news.type}</td>
                <td>{news.title}</td>
                <td className="content-column">{news.content}</td>
                <td><a href={news.link} target="_blank" rel="noopener noreferrer">View Link</a></td>
                <td>
                  {news.image ? <img src={news.image} alt="news-img" style={{ width: '50px', height: '50px', borderRadius: '10px' }} /> : '-'}
                </td>
                <td>{news.pdf ? <a href={news.pdf} target="_blank" rel="noopener noreferrer">View PDF</a> : '-'}</td>
                <td>{news.uploadDate}</td>
                <td>
                  <button style={{ border: "none", backgroundColor: "#FFFFFF" }} onClick={() => openModal(index + newsData.length)} className="delete-button">
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <div className="deletepopup-heading">Delete News</div>
            <div className="deletepopup-message">Are you sure you want to continue?</div>
            <div className="modal-actions">
              <button onClick={closeModal} className="modal-cancel-button">No</button>
              <button onClick={handleDelete} className="modal-delete-button">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;

const StatBox = ({ title, number, shareCount, color }) => {
  return (
    <div className="stat-box">
      <div className="stat-box-1">
        <div className="stat-header">
          <div className="news-title">{title}</div>
        </div>
        <div className="stat-row">
          <div className="stat-number">{number}</div>
          <div className="stat-share">{shareCount} shared this month</div>
        </div>
      </div>
      <div className="news-img" style={{ backgroundColor: color }}></div>
    </div>
  );
};