import {
  Paper,
  TableBody,
  TableCell,
  TablePagination,
  TextField,
  TableRow,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import useTable from "../reusableComponents/UseTable";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const records = [
  {
    fullName: "b",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "a",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "c",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthikeyan",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthikeyan",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthikeyan",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthikeyan",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthikeyan",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "willian Mur",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthikeyan",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthikeyan",
    email: "karthikeyan@gmail.com",
    mobile: 8056259238,
  },
  {
    fullName: "karthia",
    email: "karthn@gmail.com",
    mobile: 11111,
  },
];

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department", disableSorting: true },
];
const UserList = () => {
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
        else return items.filter((x) => x.fullName.includes(target.value));
      },
    });
  };
  return (
    <>
      <h1>Employees</h1>
      <Paper className="overflow-auto">
        <Toolbar className="d-flex justify-content-between ">
          <button type="button" className="btn btn-primary text-black">
            <PersonAddIcon /> Add Employee
          </button>
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
                  <TableCell>{list.fullName}</TableCell>
                  <TableCell>{list.email}</TableCell>
                  <TableCell>{list.mobile}</TableCell>
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

export default UserList;
