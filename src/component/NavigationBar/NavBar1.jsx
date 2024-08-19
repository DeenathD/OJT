import React from 'react'
import './navBar1.css'
export default function NavBar1() {
  return (
    <nav className='navbar-container'>
      <ul className='nav1'>
        <li className="navbarItem">
          <a href="#home" className='web-link'>Home</a>
        </li>
        <li className="navbarItem">
          <a href="#register" className='web-link'>Register</a>
        </li>
        <li className="navbarItem">
          <a href="#login" className='web-link'>Log in</a>
        </li>
      </ul>
    </nav>
  )
}
