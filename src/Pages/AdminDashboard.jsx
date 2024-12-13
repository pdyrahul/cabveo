import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import { PiUserCircle } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import BarChart from './Chart/BarChart';
import PieChart from './Chart/PieChart';
import { useAuthContext } from '../AuthContext';
import UserType from '../../constant';
import axios from 'axios';
import Cards from '../Components/Cards';
import { FaUsers, FaUserTie, FaCar } from "react-icons/fa";
function App() {

  const { auth } = useAuthContext();

  const [data, setData] = useState([]);
  const [hostCount, setHostCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [driverCount, setDriverCount] = useState(0);

  const fetchData = async () => {
    try {
      let token = localStorage.getItem('veocabJWTToken');
      let apiUrl = 'https://veocab-project.vercel.app/api/v1/admin/profile/'
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache', // Prevent caching
          'Pragma': 'no-cache',        // HTTP 1.0 backward compatibility
          'Expires': '0',
        }
      });
      setData(response.data);
      let result = response?.data.data;
      if (result.length) {
        const hostCount = result.filter((item) => item.user.userType === UserType.HOST).length;
        const userCount = result.filter((item) => item.user.userType === UserType.USER).length;
        const driverCount = result.filter((item) => item.user.userType === UserType.DRIVER).length;
        setHostCount(hostCount);
        setUserCount(userCount);
        setDriverCount(driverCount);

      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="d-flex">
        <Sidebar />
        <div className="content" style={{ flex: 1 }}>
          <div className="contentTop">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              style={{ width: '250px' }}
            />

            <div className="dashIcon" >
              <CiSettings />
              <IoNotificationsCircleOutline />
              <PiUserCircle />
            </div>
          </div>
          <div className="contentMain">
            <h3>Dashboard</h3>
            <p className='mb-2'>Welcome {auth.firstName} </p>
            <div className='contentMainHeader' >
              <Cards Icon={<FaUserTie />} Titel="Total Users" Data={userCount} bgcolor="#DCFAF8" color="#16DBCC" />
              <Cards Icon={<FaCar />} Titel="Total Drivers" Data={driverCount} bgcolor="#FFE0EB" color="#FF82AC" />
              <Cards Icon={<FaUsers />} Titel="Total Hosts" Data={hostCount} bgcolor="#FFF5D9" color="#FFBB38" />
              <Cards Icon={<FaCar />} Titel="Total Drivers" Data={driverCount} bgcolor="#E7EDFF" color="#396AFF" />

            </div>
            <div className="Charts d-flex gap-2">
              <BarChart />
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;