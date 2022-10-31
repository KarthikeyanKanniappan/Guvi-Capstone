import React, { useState } from "react";
import DashboardCard from "./DashboardCard";
import LineChart from "./LineChart";
import { UserData } from "./Data";
import DoughnutChart from "./Doughnut";

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
    title: "Time off hrs.",
    hours: 32,
  },
  {
    title: "Overtime hrs.",
    hours: 0,
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
      <div className="row m-auto">
        <div style={{ width: "900px" }}>
          {<LineChart chartData={userData} />}
        </div>
        <div className="m-auto" style={{ width: "500px" }}>
          {<DoughnutChart />}
        </div>
      </div>
    </div>
  );
};

export default Main;
