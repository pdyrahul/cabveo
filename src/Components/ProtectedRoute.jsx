import React, { useContext } from 'react';
import { AuthContext } from '.././AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext); // Access isLoggedIn state

  if(isLoggedIn) {
    return children;
  }

  if(!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
};

export default ProtectedRoute;
