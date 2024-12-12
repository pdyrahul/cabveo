// src/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png"
import { useAuthContext } from '../AuthContext';

function Sidebar() {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="sidebar" style={{ width: '250px', height: '100vh' }}>
      {/* Top Navbar inside Sidebar */}
      <div className="logoDashboard">
        <img src={Logo} alt="" />
      </div>

      {/* Sidebar Links */}
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">Dashboard</a>
        <a href="#" className="list-group-item list-group-item-action">Settings</a>
        <a href="#" className="list-group-item list-group-item-action">Reports</a>
        <a href="#" className="list-group-item list-group-item-action">Messages</a>
        <a href="#" className="list-group-item list-group-item-action" onClick={handleLogout}>Logout</a>
      </div>
      {/* <div className="logoutbttn">
        <button className="" >Logout</button>
      </div> */}
    </div>
  );
}

export default Sidebar;
