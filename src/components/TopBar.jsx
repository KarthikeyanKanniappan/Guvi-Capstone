import React from "react";
import LogoImage from "../Asset/logo.png";
import "../App.css";
const TopBar = () => {
  return (
    <div className="big-wrapper">
      <header>
        <div className="contain">
          <div className="logo">
            <img src={LogoImage} alt="Logo" />
            <h3>KanBan</h3>
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
                <a href="#" className="btn">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="btn">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBar;
