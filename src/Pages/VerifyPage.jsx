import React, { useState } from 'react';
import Logo from "../assets/Logo.png"
import verifyPic from '../assets/verifyImg.png'
import { Link } from 'react-router-dom';
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    navigate('/createPassword')
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <section className='verifyPage'>
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
            <div className="verifyform ">
              <Link to="/login"><p><span><RxCaretLeft /></span>Back to login</p></Link>
              <h2 className= "pt-4">Verify code</h2>
              <p className="fw-300 fs-10 py-2">An authentication code has been sent to your Email ID.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <legend>Enter code</legend>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={input} 
                    onChange={handleInputChange} 
                  />
                  <p>Didn't receive a code? <span>Resend</span></p>
                </div>
                <button 
                  type="submit" 
                  className="form-control" 
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="verifyImage">
              <img src={verifyPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerifyPage
