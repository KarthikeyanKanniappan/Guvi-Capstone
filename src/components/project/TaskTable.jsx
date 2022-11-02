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

const headCells = [
  { id: "serial", label: "#" },
  { id: "script", label: "Description" },
  { id: "status", label: "status" },
  { id: "Action", label: "Action", disableSorting: true },
];
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
];
const TaskTable = () => {
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
    <Paper className="overflow-auto">
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
    </Paper>
  );
};

export default TaskTable;
