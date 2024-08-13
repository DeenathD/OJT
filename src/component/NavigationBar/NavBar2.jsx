import React from 'react'
import './navBar2.css'
import profile from '../../assets/Icons/person_apron_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg'
export default function NavBar2() {
  return (
    <div className='navbar-container'>
      <ul className='nav1'>
        <li className="navbarItem">
          <a href="#dashboard" className='web-link'>Dashboard</a>
        </li>
        <li className="navbarItem">
          <a href="#departments" className='web-link'>Departments</a>
        </li>
        <li className="navbarItem">
          <a href="#register trainee" className='web-link'>Register trainee</a>
        </li>
        <li className="navbarItem">
          <a href="#logout" className='web-link'>Logout</a>
        </li>
        <li className="navbarItem">
          <a href="#profile" className='web-link'><img className='profile-icon' src={profile}></img>Hi, admin!</a>
        </li>
      </ul>
    </div>
  )
}
