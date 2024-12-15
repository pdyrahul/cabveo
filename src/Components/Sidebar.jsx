// src/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png"
import { useAuthContext } from '../AuthContext';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaUserTie, 
  FaCar, 
  FaCalendarCheck, 
  FaMoneyBill, 
  FaUserCheck, 
  FaHistory, 
  FaQuestionCircle, 
  FaTicketAlt, 
  FaImage, 
  FaCogs, 
  FaBullhorn, 
  FaShareSquare, 
  FaMoneyCheck, 
  FaCreditCard, 
  FaComments, 
  FaBook, 
  FaPhone, 
  FaUserCog, 
  FaSignOutAlt 
} from 'react-icons/fa';

function Sidebar() {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  const sidebarLinks = [
    { label: 'Dashboard', href: '#', icon: <FaTachometerAlt /> },
    { label: 'Users list', href: '#', icon: <FaUsers /> },
    { label: 'Hosts list', href: '#', icon: <FaUserTie /> },
    { label: 'Drivers list', href: '#', icon: <FaUserTie /> },
    { label: 'All cars', href: '#', icon: <FaCar /> },
    { label: 'All bookings', href: '#', icon: <FaCalendarCheck /> },
    { label: 'Transaction list', href: '#', icon: <FaMoneyBill /> },
    { label: 'Host verification', href: '#', icon: <FaUserCheck /> },
    { label: 'Referral history', href: '#', icon: <FaHistory /> },
    { label: 'Queries', href: '#', icon: <FaQuestionCircle /> },
    { label: 'Coupons', href: '#', icon: <FaTicketAlt /> },
    { label: 'Banners', href: '#', icon: <FaImage /> },
    { label: 'Services', href: '#', icon: <FaCogs /> },
    { label: 'Goals', href: '#', icon: <FaBullhorn /> },
    { label: 'Referral Level', href: '#', icon: <FaShareSquare /> },
    { label: 'Terms & Conditions', href: '#', icon: <FaBook /> },
    { label: 'Push notifications', href: '#', icon: <FaPhone /> },
    { label: 'Shares & Taxes', href: '#', icon: <FaMoneyCheck /> },
    { label: 'Payout management', href: '#', icon: <FaCreditCard /> },
    { label: 'Payment methods', href: '#', icon: <FaCreditCard /> },
    { label: 'Live chat', href: '#', icon: <FaComments /> },
    { label: 'FAQs', href: '#', icon: <FaQuestionCircle /> },
    { label: 'Contact support', href: '#', icon: <FaPhone /> },
    { label: 'Sub admin', href: '#', icon: <FaUserCog /> },
    { label: 'Earnings', href: '#', icon: <FaMoneyBill /> },
    { label: 'Logout', href: '#', icon: <FaSignOutAlt />, onClick: handleLogout },
  ];

  return (
    <div className="sidebar" style={{ width: '250px' }}>
      <div className="logoDashboard">
        <img src={Logo} alt="" />
      </div>

      <div className="list-group">
        {sidebarLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="list-group-item list-group-item-action d-flex align-items-center"
            onClick={link.onClick}
          >
            <span className="me-2">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;