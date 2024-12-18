import React, { useContext } from 'react'; // Import useContext
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import AdminDashboard from './Pages/AdminDashboard';
import AuthProvider from './AuthContext';
import ForgetPage from './Pages/ForgetPage';
import ProtectedRoute from './Components/ProtectedRoute';
import NotFound from './Pages/NotFound';
import  VerifyPage from './Pages/VerifyPage';
import CreatePassword from './Pages/CreatePassword';
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgetPassword" element={<ForgetPage />} />
          <Route path="/verifyEmail" element={<VerifyPage />} />
          <Route path="/createPassword" element={<CreatePassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};


export default App;
