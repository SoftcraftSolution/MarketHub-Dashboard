import React, { useState } from 'react';
import './news.css';
import Pagination from '../Pagination';
import deleteIcon from '../../assets/deleteimg.png'
import sampleImage from '../../assets/mhublogo.png'
import filter from '../../assets/filter.png'

const NewsPage = () => {
  const newsData = [
    {
      type: 'Self News',
      title: 'Global Copper Cathode Market Growing',
      content: 'We are pleased to introduce the latest enhancements to our impending expansion...',
      link: 'https://tradegenomics.com/xxxxxx',
      pdf: true,
      image: sampleImage,
      uploadDate: '12-04-2024, 12:03',
    },
    {
      type: 'Circular',
      title: 'New Bulletin on New Price Updates',
      content: 'We are pleased to introduce the latest enhancements to our impending expansion...',
      link: 'https://tradegenomics.com/xxxxxx',
      pdf: false,
      image: sampleImage,
      uploadDate: '12-04-2024, 08:22',
    },
    // More mock data for rows can be added here
  ];

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    console.log(date);
  };

  const getStringDate = (date) => {
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }
    return date.toISOString().split('T')[0];
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="news-page">
      <div className='news-header'>News</div>
      <div className="stats">
        <StatBox title="Total Self News Shared" number="4356" shareCount="3" color='#C7C5FF' />
        <StatBox title="Total Circular Shared" number="48" shareCount="3"  color='#B2FFD9'/>
        <StatBox title="Self News Shared" number="4356" shareCount="3" color='#ffe8af'/>
      </div>

      <div className="news-list">
        <div className='news-close'>
          <div className='newstitle'>
            News List
          </div>
          <div className="search-and-date">
            <input type="text" placeholder="Search by name, phone..." className="search-bar" />
            <div id="datteePickeer">
              <input type="date" id="birthday" name="birthday" className="date-picker-input" value={getStringDate(selectedDate)} onChange={handleDateChange} />
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
              <th>Pdf</th>
              <th>Upload Date and Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((news, index) => (
              <tr key={index}>
                <td>{news.type}</td>
                <td>{news.title}</td>
                <td className="content-column">{news.content}</td>
                <td><a href={news.link} target="_blank" rel="noopener noreferrer">View Link</a></td>
                <td>
                  {news.image ? <img src={news.image} alt="news-img" style={{ width: '50px', height: '50px', borderRadius: '10px' }} /> : '-'}
                </td>
                <td>{news.pdf ? <img src="/pdf-icon.png" alt="PDF" /> : '-'}</td>
                <td>{news.uploadDate}</td>
                <td>
                  <button style={{border:"none",backgroundColor:"#FFFFFF"}} onClick={() => console.log('Delete news', index)} className="delete-button">
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination /> 
    </div>
  );
};

export default NewsPage;

const StatBox = ({ title, number, shareCount, color }) => {
  return (
    <div className="stat-box">
      <div className='stat-box-1'>
        <div className="stat-header">
          <div className="news-title">{title}</div>
        </div>
        <div className="stat-row">
          <div className="stat-number">{number}</div>
          <div className="stat-share">{shareCount} shared this month</div>
        </div>
      </div>
      <div className='news-img' style={{backgroundColor:`${color}`}}></div>  
    </div>
  );
};
