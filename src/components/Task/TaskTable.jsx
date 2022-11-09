import {
  Paper,
  TableBody,
  TableCell,
  TablePagination,
  TextField,
  TableRow,
  Toolbar,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import useTable from "../reusableComponents/UseTable";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { env } from "../../config";

// const records = [
//   {
//     Name: "sample Project",
//     task: "Sample Task1",
//     sub: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. ",
//     start: "Nov 03,2022",
//     Due: "Jan20,2021",
//     status: "on-progress",
//     color: "primary",
//     taskStatus: "Done",
//     taskColor: "success",
//   },
//   {
//     Name: "sample Project1",
//     task: "Sample Task2",
//     sub: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. ",
//     start: "Nov 15,2022",
//     Due: "Jan20,2023",
//     status: "done",
//     color: "success",
//     taskStatus: "pending",
//     taskColor: "secondary",
//   },
//   {
//     Name: "Amber",
//     task: "Sample Task3",
//     sub: " a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. ",
//     start: "Nov 15,2022",
//     Due: "Jan20,2023",
//     status: "Hold",
//     color: "danger",
//     taskStatus: "pending",
//     taskColor: "secondary",
//   },
// ];

const headCells = [
  { id: "#", label: "#" },
  { id: "Project", label: "Project" },
  { id: "Project", label: "Task" },
  { id: "start", label: "Project started" },
  { id: "due", label: "Project Due Date" },
  { id: "status", label: "Project Status" },
  { id: "statu", label: "Task Status" },
  { id: "action", label: "Action" },
];
const TaskTable = () => {
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
        else return items.filter((x) => x.Name.includes(target.value));
      },
    });
  };

  useEffect(() => {
    getProject();
  }, []);

  let getProject = async () => {
    try {
      let response = await axios.get(`${env.api}/task/taskList`);
      setRecords(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h3>Task</h3>
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
            variant="standard"
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
                  <TableCell>
                    <div>
                      <b>{list.taskName}</b>
                      <p>{list.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>{list.project.startDate}</TableCell>
                  <TableCell>{list.project.endDate}</TableCell>
                  <TableCell>
                    <span className={`badge bg-${list.project.color}`}>
                      {list.project.state}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`badge bg-${list.color}`}>
                      {list.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Add Productivity
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
  );
};

export default TaskTable;
