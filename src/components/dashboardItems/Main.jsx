import React, { useState } from "react";
import DashboardCard from "./DashboardCard";
import { UserData } from "../charts/Data";
import ProjectTable from "./ProjectTable";

let data = [
  {
    title: "Capacity hrs.",
    hours: 680,
  },
  {
    title: "Scheduled hrs.",
    hours: 384,
  },
  {
    title: "Unscheduled hrs.",
    hours: 296,
  },
  {
    title: "Total projects",
    hours: 2,
  },
  {
    title: "Total Tasks",
    hours: 4,
  },
];
const Main = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h3 className=" mb-0 text-gray-800">Dashboard</h3>
      </div>
      <div className="row">
        {data.map((card, i) => {
          return <DashboardCard key={i} card={card} />;
        })}
      </div>
      {/* <div className="row m-auto">
        <div style={{ width: "900px" }}>
          {<LineChart chartData={userData} />}
        </div>
        <div className="m-auto" style={{ width: "500px" }}>
          {<DoughnutChart />}
        </div>
      </div> */}
      <div className="mt-4">
        <h4 className=" mb-4 text-gray-800">Project Progress</h4>
        <ProjectTable />
      </div>
    </div>
  );
};

export default Main;
