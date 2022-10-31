import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="out">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
