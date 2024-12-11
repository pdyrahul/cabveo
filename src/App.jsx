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
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgetPassword" element={<ForgetPage />} />
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

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useContext(AuthContext); // Use useContext
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

export default App;
