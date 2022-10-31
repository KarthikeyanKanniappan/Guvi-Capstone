import React from "react";
import TopBar from "../components/TopBar";
import Art from "../Asset/clipart.png"
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
          <p className="text">Collaborate, manage projects, and reach new productivity peaks</p>
          <div className="cta">
            <a href="#" class="btn btn-primary">Sign up-it's free</a>
          </div>
        </div>
        <div className="right">
          <img src={Art} alt="per" className="person"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
