import React, { useState } from 'react';
import Logo from "../assets/logo.png"
import createPic from '../assets/freepik--Characters--inject-46.png'
import { useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
    } else {
      // Password validation successful, navigate to next page
      navigate('/login');
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  return (
    <section className='createPage'>
      <div className="topbar">
        <img src={Logo}
          alt="Logo"
          width={220}
          height={40}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto p-4">
            <div className="createform ">
              <h2 className= "pt-4">Set a password</h2>
              <p className="fw-300 fs-10 py-2">Your previous password has been reseted.Please set a new password for your account.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <legend>Create New Password</legend>
                  <input 
                    type="password" 
                    className="form-control" 
                    value={password} 
                    onChange={handlePasswordChange} 
                  />
                </div>
                <div className="form-group">
                  <legend>Re-enter New Password</legend>
                  <input 
                    type="password" 
                    className="form-control" 
                    value={confirmPassword} 
                    onChange={handleConfirmPasswordChange} 
                  />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="form-control" disabled={loading}>
                  {loading ? 'Logging in...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="createImage">
              <img src={createPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerifyPage