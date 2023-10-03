// Layout.js
import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './layout.css'; 

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
 
    </div>
  );
}

export default Layout;
