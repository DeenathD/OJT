import React from "react";
import { useLocation } from 'react-router-dom';
import "./sidePage2.css";
import LoadingPT1 from "../component/type1/LoadingPT1";
import LoadingPT2 from "../component/type1/LoadingPT2";
import NavBar1 from "../component/NavigationBar/NavBar1";
export default function SidePage2() {
  const location = useLocation();
  const userData = location.state?.userData; 
  return (
    <>
      <div className="main-sidebar-con">
        <div className="sidepage2-container2">
          <NavBar1 />
        </div>

        <div className="sidepage2-container">
          <LoadingPT2 />
          <LoadingPT1 />
        </div>
      </div>
    </>
  );
}
