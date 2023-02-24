import React from 'react';
import Sidebar from '../AdminDashBoard/Sidebar/Sidebar';
import TopNav from '../AdminDashBoard/TopNav/TopNav.js';
import { Outlet } from 'react-router-dom';

const AdminDashboardLayout = () => {
  return (
    
    <div className="drawer drawer-mobile">
    <input id="admin-drawer" type="checkbox" className="drawer-toggle" />     
     <TopNav />     
    <div className="drawer-content items-center justify-center">
    <Outlet />     
        
    </div> 
    <div className="drawer-side">
      <label htmlFor="admin-drawer" className="drawer-overlay"></label> 
      <Sidebar />
     
    </div>
  </div>


  );
};

export default AdminDashboardLayout;