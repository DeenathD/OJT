import React from 'react'
import './loadingSection1.css'
import welcomeIMG from '../../assets/images/hello.jpg'
export default function LoadingSection1() {
  return (
    <div className='welocome-main-decoy'>
      <h1 className="welcome-header">Hello Admin</h1>
      <div className="img-div">
      <img className='welcome-img-dev' src={welcomeIMG}/>
      </div>
      
      
    </div>
  )
}
