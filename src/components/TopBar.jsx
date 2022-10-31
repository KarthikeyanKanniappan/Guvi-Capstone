import React,{useState} from "react";
import LogoImage from "../Asset/logo.png";
import "../App.css";
const TopBar = () => {
  const[side,setSide]=useState(false)
  return (
    <div >
      <header className="m-5">
        <div className="contain">
          <div className="logo">
            <img src={LogoImage} alt="Logo" />
            <h3>Kanban</h3> 
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#" className="btn btn-primary">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="btn  btn-primary">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
          <div onClick={()=>{
            setSide(!side)
          }}  className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBar;
