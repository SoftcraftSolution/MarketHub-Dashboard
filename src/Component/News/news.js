import React, { useState, useEffect } from 'react';
import './news.css';
import Pagination from '../Pagination';


const NewsPage = () => {
  const newsData = [
    {
      type: 'Self News',
      title: 'Global Copper Cathode Market Growing',
      content: 'We are pleased to introduce the latest enhancements to our impending expansion...',
      link: 'https://tradegenomics.com/xxxxxx',
      pdf: true,
    },
    {
      type: 'Circular',
      title: 'New Bulletin on New Price Updates',
      content: 'We are pleased to introduce the latest enhancements to our impending expansion...',
      link: 'https://tradegenomics.com/xxxxxx',
      pdf: false,
    },
    // More mock data for rows can be added here
  ];
  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    console.log(date);
  };

  const getStringDate = (date) => {
    // Ensure date is a Date object
    if (!(date instanceof Date)) {
      throw new Error("Input must be a Date object");
    }
  }
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
        <th>Pdf</th>
      </tr>
    </thead>
    <tbody>
      {newsData.map((news, index) => (
        <tr key={index}>
          <td>{news.type}</td>
          <td>{news.title}</td>
          <td className="content-column">{news.content}</td>
          <td><a href={news.link} target="_blank" rel="noopener noreferrer">View Link</a></td>
          <td>{news.pdf ? <img src="/pdf-icon.png" alt="PDF" /> : '-'}</td>
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
        <div className='news-img' style={{backgroundColor:`${color}`}}>
            </div>  
           
      </div>
  
    );
 
  };
