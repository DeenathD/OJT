import React from 'react'
import { useNavigate } from 'react-router-dom';
import './loadingSection3.css'
export default function LoadingSection3() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle logout
  const handleLogout = () => {
    // Here you can also clear user data or tokens if needed
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className='only-logout-button'>
        <button 
        className='logout-btn'
        onClick={handleLogout}
        >Log Out</button>
      
    </div>
  )
}
