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
import { FaUsers, FaUserTie, FaUserCog, FaHandHoldingUsd, FaMoneyBill } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CustomPaginationActionsTable from '../Components/DataTable/tableData';
const AdminDashboard = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { auth } = useAuthContext();

  const [data, setData] = useState({
    users: [],
    bookings: 0,
    pricing: [],
  });
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      let token = localStorage.getItem('veocabJWTToken');
      const [userResponse, bookingResponse, pricingResponse] = await Promise.all([
        axios.get(`${apiUrl}/admin/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }),
        axios.get(`${apiUrl}/admin/getBooking`),
        axios.get(`${apiUrl}/admin/Pricing`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
      ]);
      const userData = userResponse.data.data;
      setUserList(userData);
      const bookingData = bookingResponse.data.data.docs.length;
      const pricingData = pricingResponse.data.data;

      const userCount = userData.filter((item) => item.user.userType === UserType.USER).length;
      const driverCount = userData.filter((item) => item.user.userType === UserType.DRIVER).length;
      const hostCount = userData.filter((item) => item.user.userType === UserType.HOST).length;

      // Dynamically set the data with actual counts
      setData({
        users: [
          { title: 'Total Users', count: userCount, icon: <FaUserTie />, bgcolor: "#DCFAF8", color: "#16DBCC" },
          { title: 'Total Drivers', count: driverCount, icon: <FaUserCog />, bgcolor: "#FFE0EB", color: "#FF82AC" },
          { title: 'Total Hosts', count: hostCount, icon: <FaUsers />, bgcolor: "#FFF5D9", color: "#FFBB38" },
        ],
        bookings: bookingData,
        pricing: pricingData,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
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
            <div className="dashIcon">
              <CiSettings />
              <IoNotificationsCircleOutline />
              <PiUserCircle />
            </div>
          </div>

          <div className="contentMain">
            <h3>Dashboard</h3>
            <p className="mb-2">Welcome {auth.firstName}</p>

            {/* Show Skeleton Loaders while data is loading */}
            <div className="contentMainHeader">
              {loading ? (
                [1, 2, 3, 4].map((_, index) => (
                  <div key={index} style={{ width: '250px', height: '120px' }}>
                    <Skeleton height="100%" borderRadius="10px" />
                  </div>
                ))
              ) : (
                <>
                  {/* Dynamically render user cards */}
                  {data.users.map((user, index) => (
                    <Cards
                      key={index}
                      Icon={user.icon}
                      Titel={user.title}
                      Data={user.count}
                      bgcolor={user.bgcolor}
                      color={user.color}
                    />
                  ))}
                  <Cards
                    Icon={<FaHandHoldingUsd />}
                    Titel="Total Bookings"
                    Data={data.bookings}
                    bgcolor="#E7EDFF"
                    color="#396AFF"
                  />
                </>
              )}
            </div>

            <div className="Charts d-flex gap-2 my-4">
              {/* Pass the pricing data to the chart */}
              <BarChart />
              <PieChart />
            </div>
            {loading ? (
              <Skeleton height={400} width="100%" />
            ) : (
              userList.length > 0 && <CustomPaginationActionsTable users={userList} />
            )}
            <div className='my-5'>
            {loading ? (
              <Skeleton height={400} width="100%" />
            ) : (
              userList.length > 0 && <CustomPaginationActionsTable users={userList} />
            )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
