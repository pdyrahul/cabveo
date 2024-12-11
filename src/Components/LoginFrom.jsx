import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "../lib/axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = ({onLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'rememberMe') setRememberMe(e.target.checked);
  };
  const resetForm = ()=>{
    setEmail('');
    setPassword('');
  }
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await axios.post(`/admin/login`, {
      email,
      password
    }).then((response)=>{
      if (response.data.accessToken) {
        onLoginSuccess(response.data)
        resetForm()       
      } else {
        setError('No token received. Please try again.');
      }
    
    }).catch((err)=>{
      console.log(err)
      if (err.response && err.response.status === 401) {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again later......');
      }
    }).finally(()=>{
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <legend>Email</legend>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group position-relative">
        <legend>Password</legend>
        <input
          type={showPassword ? 'text' : 'password'}
          className="form-control"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="eye-icon position-absolute"
          style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className="checkboxDiv">
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleChange}
          />
          Remember me
        </label>
        <p className="forgotPassword fs-10 color-black">
        <Link to="/forgetPassword">Forgot Password?</Link>
        </p>
      </div>
      {error && <div className="error-message">{error}</div>}

      <button type="submit" className="form-control" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
