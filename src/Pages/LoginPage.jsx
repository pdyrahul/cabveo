import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/LoginFrom';
import logincar from "../assets/loginCar.png";
import logo from "../assets/logo.png";
import { useAuthContext } from '../AuthContext';


const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserAuth,isLoggedIn } = useAuthContext();

  // Callback to navigate after successful login
  const handleLoginSuccess = (data) => {
    setUserAuth(data);
  };

  useEffect(() => {
    const checkAuth = async () => {
      if (isLoggedIn) {
        navigate('/dashboard')
      }
    };

    checkAuth();
  }, [isLoggedIn]);

  return (
    <section className='loginPage'>
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="formContent">
            <h2>Login</h2>
            <span>Login to access your account</span>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="loginCarIMg">
            <div className="logoLogin"><img src={logo} alt="" /></div>
            <div className="div"><img className="logincar" src={logincar} alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
