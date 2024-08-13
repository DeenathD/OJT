import { useState } from 'react'
import './App.css'
import  NavBar1 from '../src/component/NavigationBar/NavBar1'
import Login from './component/type1/Login'
import Info from './component/type1/Info'
import LoadingPT1 from './component/type1/LoadingPT1'
import LoadingPT2 from './component/type1/LoadingPT2'
import SidePage2 from './Pages/SidePage2'
import NavBar2 from './component/NavigationBar/NavBar2'
import LoadingSection1 from './component/type 2/LoadingSection1'
import Card1 from './component/type 2/Card1'
import LoadingSection2 from './component/type 2/LoadingSection2'
import SidePage3 from './Pages/SidePage3'
import LoadingSection3 from './component/type 2/LoadingSection3'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="login-page">
    <Info/>
    <Login/>
    </div> */}
    {/* <LoadingPT1/>
    <LoadingPT2/> */}
    {/* <SidePage2/> */}
    {/* <NavBar1/> */}
    {/* <NavBar2/> */}
    {/* <LoadingSection1/> */}
    {/* <Card1/> */}
    <SidePage3/>
    {/* <LoadingSection3/> */}
    
    
    </>
    
  )
}

export default App
