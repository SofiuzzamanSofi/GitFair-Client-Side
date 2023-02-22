import React from 'react';
import Sidebar from '../AdminDashBoard/Sidebar/Sidebar';
import TopNav from '../AdminDashBoard/TopNav/TopNav.jsx';
import { Outlet } from 'react-router-dom';

const AdminDashboardLayout = () => {
  return (
    
    <div className="drawer drawer-mobile">
    <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
     
     <TopNav />
    <div className="drawer-content flex flex-col items-center justify-center">
     
      <label htmlFor="admin-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
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