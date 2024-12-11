import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar component
import { PiUserCircle } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import BarChart from './Chart/BarChart';
import PieChart from './Chart/PieChart';
import { useAuthContext } from '../AuthContext';
// import UserInfoData from '../Components/DataTable/userInfoData';
function App() {
  const { auth } = useAuthContext();
  return (
    <div className="container-fluid p-0">
      <div className="d-flex">
        <Sidebar />
        <div className="content" style={{ flex: 1 }}>
          <div className="contentTop">
            <input
              type="text"
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
          <h3>  Dashboard <span>Role : {auth.firstName} </span></h3>
          <p className='mb-2'>Welcome </p>
          <div className="Charts d-flex gap-2">
          <BarChart/>
          <PieChart/>
          </div>
          {/* <div className="tableContent"> <UserInfoData/></div> */}
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
