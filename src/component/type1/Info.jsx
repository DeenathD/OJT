import React from 'react';
import './info.css';

export default function Info() {
  return (
    <div className='main-info-container'>
      <div className="sub-container">
        <h1 className="login-title">Administrator Login</h1>
      </div>
      <div className="sub-container2">
        <div className="sub-container2-part">
          <label className="formlbl" htmlFor='email'>Email Address</label>
          <input id='email' type='email' className='input-login-txt' required></input>
        </div>
        <div className="sub-container2-part">
          <label className="formlbl" htmlFor='password'>Password</label>
          <input id='password' type='password' className='input-login-txt' required></input>
        </div>
      </div>
      <div className="sub-container2-btn">
          <button id='button' type='button' className='input-login-btn'>Log in</button>
        </div>
    </div>
  );
}
