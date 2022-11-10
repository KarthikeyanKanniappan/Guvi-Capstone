import React from "react";
import TopBar from "../components/landingPage/TopBar";
import Art from "../Asset/clipart.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="big-wrapper">
      <TopBar />
      <div className="showcase-area">
        <div className="contain">
          <div className="left">
            <div className="big-title">
              <h1>Resource,You're going to need to meet demand</h1>
            </div>
            <p className="text">
              Collaborate, manage projects, and reach new productivity peaks
            </p>
            <p className="text">
              <p>
                <b>Credentials</b>
              </p>
              <b>UserName:</b>perosn1@gmail.com
              <br />
              <b>password:</b>123456789 <br />
              <b>AdminKey:</b>111
            </p>
            <div className="cta">
              <Link to="login" className="btn btn-primary">
                Sign up-it's free
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={Art} alt="per" className="person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
