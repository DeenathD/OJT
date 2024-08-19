import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SidePage3 from './Pages/SidePage3'
import LoginPage from './Pages/LoginPage'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<SidePage3 />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    
    
  )
}

export default App
