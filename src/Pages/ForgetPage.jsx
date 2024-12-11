import React from 'react'
import Logo from "../assets/logo.png"
import forgetPic from '../assets/forgetPic.png'
import { Link } from 'react-router-dom';
import { RxCaretLeft } from "react-icons/rx";
import { useState } from 'react';
const ForgetPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <section className='forgetPassword'>
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
            <div className="forgetform ">
              <Link to="/login"><p><span><RxCaretLeft /></span>Back to login</p></Link>
              <h2 className= "pt-4">Forget your password?</h2>
              <p className="fw-300 fs-10 py-2">Don’t worry, happens to all of us. Enter your email below to recover your password</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <legend>Email</legend>
                  <input type="text" className="form-control" />
                </div>
                <button type="submit" className="form-control" disabled={loading}>
                  {loading ? 'Logging in...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="forgetImage">
              <img src={forgetPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgetPage