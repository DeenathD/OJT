import React from 'react'
import './loginPage.css'
import Login from '../component/type1/Login'
import Info from '../component/type1/Info'

export default function LoginPage() {
  return (
    <div className="login-page">
    <Info/>
    <Login/>
    </div>
  )
}
