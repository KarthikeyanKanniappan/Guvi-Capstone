import React, { useState, useContext, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import { UserData } from "../charts/Data";
import ProjectTable from "./ProjectTable";
import UserContext from "../../UserContext.js";
import axios from "axios";
import { env } from "../../config";

const Main = () => {
  let context = useContext(UserContext);
  const [value, setValue] = useState("");
  const { employee, setEmployee, project, setProject, tasker, setTasker } =
    context;

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //     },
  //   ],
  // });
  let findCapacity = (employee) => {
    let emp = +employee.length;
    let month = 22;
    let day = 8;
    let final = emp * month * day;
    return final;
  };

  useEffect(() => {
    getUser();
    getTask();
    getProject();
    setValue(findCapacity(employee));
  }, []);

  let getTask = async () => {
    try {
      let response = await axios.get(`${env.api}/task/taskList`);
      setTasker(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  let getUser = async () => {
    try {
      let response = await axios.get(`${env.api}/team/employees`);
      setEmployee(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  let getProject = async () => {
    try {
      let response = await axios.get(`${env.api}/projects/projectList`);
      setProject(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  let data = [
    {
      title: "Capacity hrs.",
      hours: value,
    },
    {
      title: "Effective hrs.",
      hours: 384,
    },
    {
      title: "In-Effective hrs.",
      hours: 296,
    },
    {
      title: "Total projects",
      hours: project.length,
    },
    {
      title: "Total Tasks",
      hours: tasker.length,
    },
  ];
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
