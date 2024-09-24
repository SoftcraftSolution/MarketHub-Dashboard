// src/components/AdminDashboard.js
import React from 'react';
import './addadmin.css';
import logout from '../../assets/logout.png';

const AdminDashboard = () => {
    const admins = [
        { name: 'Shantanu Dixit', mobile: '7689898034', email: 'Shantanu@xyzmail.com', date: '12-04-2024' },
        { name: 'Abhishek Mishra', mobile: '7689898055', email: 'AbhiMishra@gmail.com', date: '26-03-2023' },
        { name: 'Niraj Prakash', mobile: '7689898040', email: 'nirajPrakash@workmail.com', date: '28-05-2024' },
        { name: 'Parmeshwar Kadam', mobile: '7689898049', email: 'parmeshwarKadam@xyzmail.com', date: '08-12-2023' },
        { name: 'Niraj Prakash', mobile: '7689898050', email: 'Keshav@Niraj123@gmail.com', date: '27-01-2024' }
    ];

    return (
        <div className="admin-dashboard">
            <div className="admin-header">

                <div className="admin-details">
                    <div className='admin-details-1'>
                    <img src="https://via.placeholder.com/100" alt="Admin" className="admin-avatar" />
                    
                    <div className="admin-info">
                    <div className='basicdetail'>
                        <div>Raj Deep</div>
                        <span className="admin-role">Admin</span>
                    </div>
                    </div>  
                    </div>  
                        <div>Name - Raj Deep</div>
                        <div>Mobile - +91 7098567389</div>
                    
                </div>
             <div className='admin-buttonflex'>
                <button className="add-admin-btn" id='newid'>Add Admin</button>
                <button className="logout-btn" id='oldid'><img src={logout} alt="log"/></button>
                </div>
 
            </div>

            <div className="admin-list">
                <h3>List of admins</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Admin Name</th>
                            <th>Mobile Number</th>
                            <th>Email ID</th>
                            <th>Date of Joining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin, index) => (
                            <tr key={index}>
                                <td>{admin.name}</td>
                                <td>{admin.mobile}</td>
                                <td>{admin.email}</td>
                                <td>{admin.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
