import React, { useState, useEffect, useContext } from "react";
import Line from "../charts/Line";
import { UserData } from "../charts/Data";
import DoughnutChart from "../charts/Doughnut";
import {
  Paper,
  TableBody,
  TableCell,
  TablePagination,
  TextField,
  TableRow,
  Toolbar,
} from "@mui/material";
import useTable from "../reusableComponents/UseTable";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Avatar from "../project/Avatar";
import axios from "axios";
import { env } from "../../config";
import UserContext from "../../UserContext.js";

const headCells = [
  { id: "#", label: "#" },
  { id: "profile", label: "Project" },
  { id: "mobile", label: "Task" },
  { id: "email", label: "Completed Task" },
  { id: "email", label: "Effective hrs." },
  { id: "department", label: "status", disableSorting: true },
];

// const records = [
//   {
//     fullName: "Arun",
//     profile:
//       "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-06-768x766.png",
//     email: "arun@gmail.com",
//     position: "Employee",
//   },
// ];
const Report = () => {
  let context = useContext(UserContext);
  // const { employee, setEmployee } = context;
  const [records, setRecords] = useState([]);
  const [value, setValue] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, value);

  const handleChange = (event) => {
    let target = event.target;
    setValue({
      fn: (items) => {
        if (target.value == "") return items;
        else return items.filter((x) => x.firstName.includes(target.value));
      },
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  let getUser = async () => {
    try {
      let response = await axios.get(`${env.api}/task/final`);
      let response1 = await axios.get(`${env.api}/projects/projectList`);
      setRecords(response.data);
      console.log(response1);
      // (response.data);
      // setEmployee(response.data);
    } catch (err) {
      console.log(err);
    }
  };
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
    <div>
      <div className="row m-auto">
        <>
          <h3>Report</h3>
          <Paper className="overflow-auto">
            <Toolbar className="d-flex justify-content-between ">
              <TextField
                className=""
                sx={{ bgcolor: "#f1f8fc", width: "25%" }}
                id="filled-multiline-flexible"
                label="Search"
                multiline
                maxRows={4}
                onChange={handleChange}
                variant="filled"
              />
            </Toolbar>
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((list, i) => {
                  return (
                    <TableRow key={i + 1}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{list.project.projectName}</TableCell>

                      <TableCell>{list.position}</TableCell>
                      <TableCell>{list.email}</TableCell>
                      <TableCell>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="primary"
                            id="dropdown-basic"
                          >
                            Action
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/portal/viewProject">
                              View
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Edit
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </TblContainer>
            <TblPagination />
          </Paper>
        </>
        {/* <div style={{ width: "100%" }}><Line /> */}
        <div className="m-auto" style={{ width: "500px" }}>
          {<DoughnutChart />}
        </div>
      </div>
    </div>
  );
};

export default Report;
