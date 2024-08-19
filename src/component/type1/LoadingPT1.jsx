import React from 'react'
import { useNavigate } from 'react-router-dom';
import './loadingPT1.css';



export default function LoadingPT1() {
    const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className='main-con'>
        <div className="con1-part1"> 
            <h1 className="loading-main-header">ON JOB TRAINING</h1>
        </div>
        <div className="part2-para">
            <p className="intro-para">Manage your trainers in the most perfect way</p>
        </div>
        <div className="button-div">
            <button 
            className="button-div-button-1"
            >
                New User? Let's Get Started!</button>
            <button className="button-div-button-2"
            onClick={handleLoginClick}
            >
                Administrator Login</button>
        </div>
        <div className="part3-para2">
            <p className="about-para">In this system allows you to manage your trainers  in a easy way.<br/>
            You have complete control over the details of the detail of the <br/>
            registered trainers.Manage the time, payments and departments of <br/>
            your trainers without hassle in simple clicks.<br/></p>
        </div>
       


      
    </div>
  )
}
