import React from 'react';
import './recentnotification.css';

const RecentNotifications = () => {
  const notifications = [
    { name: 'Ajith Bhata', time: '5 min ago' },
    { name: 'Ashutosh Kumar', time: '2 hrs ago' },
    { name: 'Anne Phil', time: '24 hrs ago' }
  ];

  return (
    <div className="recent-notifications-container">
      <h3>Recent Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            <span>{notification.name}</span>
            <span>{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentNotifications;
