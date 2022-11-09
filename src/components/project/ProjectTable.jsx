import React, { useState, useContext, useEffect } from "react";
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
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";
import UserContext from "../../UserContext";
import axios from "axios";
import { env } from "../../config";
// const records = [
//   {
//     Name: "sample Project",
//     sub: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. ",
//     start: "Nov 03,2022",
//     Due: "Jan20,2021",
//     status: "on-progress",
//     color: "primary",
//   },
//   {
//     Name: "sample Project1",
//     sub: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. ",
//     start: "Nov 15,2022",
//     Due: "Jan20,2023",
//     status: "done",
//     color: "success",
//   },
//   {
//     Name: "Amber",
//     sub: " a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. ",
//     start: "Nov 15,2022",
//     Due: "Jan20,2023",
//     status: "Hold",
//     color: "danger",
//   },
// ];
const headCells = [
  { id: "#", label: "#" },
  { id: "Project", label: "Project" },
  { id: "start", label: "Date started" },
  { id: "due", label: "Due Date" },
  { id: "status", label: "Status" },
  { id: "action", label: "Action" },
];
const ProjectTable = () => {
  const [records, setRecords] = useState([]);
  let context = useContext(UserContext);
  const { project, setProject } = context;
  const params = useParams();
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

  // Getting all projects
  useEffect(() => {
    getProject();
  }, []);

  let getProject = async () => {
    try {
      let response = await axios.get(`${env.api}/projects/projectList`);
      setRecords(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3>Projects</h3>
      <Paper className="overflow-auto">
        <Toolbar className="d-flex justify-content-between ">
          <Link
            to="/portal/createProject"
            type="button"
            className="btn btn-primary text-black"
          >
            <AddToPhotosIcon />
            Add Project
          </Link>
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
                  <TableCell>
                    <div>
                      <b>{list.projectName}</b>
                      <p>{list.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>{list.startDate}</TableCell>
                  <TableCell>{list.endDate}</TableCell>
                  <TableCell>
                    <span className={`badge bg-${list.color}`}>
                      {list.state}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Action
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          to={`/portal/viewProject/${list._id}`}
                        >
                          View
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
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

export default ProjectTable;
