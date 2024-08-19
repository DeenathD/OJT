// eslint-disable-next-line no-unused-vars
import React , { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from '../../config/firebaseConfigs'; 
import './info.css';

export default function Info() {
// State to hold email and password values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in: ", userCredential.user);
      alert("Logging Successfully!")
      // You can redirect the user to another page or update the UI here
    } catch (error) {
      console.error("Error logging in: ", error.message);
      alert("Logging Un successfully!")
      // Optionally, display an error message to the user
    }
    // console.log(email, password)
  };

  return (
    <div className='main-info-container'>
      <div className="sub-container">
        <h1 className="login-title">Administrator Login</h1>
      </div>
      <div className="sub-container2">
        <div className="sub-container2-part">
          <label className="formlbl" htmlFor='email'>Email Address</label>

          <input 
          id='email' 
          type='email' 
          className='input-login-txt' 
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state when email changes
          required/>
        </div>
        <div className="sub-container2-part">
          <label className="formlbl" htmlFor='password'>Password</label>
          <input 
          id='password' 
          type='password' 
          className='input-login-txt' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} // Update state when password changes
          required/>
        </div>
      </div>
      <div className="sub-container2-btn">
          <button 
          id='button' 
          type='button' 
          className='input-login-btn'
          onClick={handleLogin} // Trigger the login function when clicked
          >
            Log in
            </button>
        </div>
    </div>
  );
}
