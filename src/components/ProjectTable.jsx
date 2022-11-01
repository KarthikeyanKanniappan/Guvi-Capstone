import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProgressBar from "react-bootstrap/ProgressBar";
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Sample project", 40, "started"),
  createData("Sample project 102", 25, "onprogress"),
];

const data = ["#", "Project", "Progress", "Status"];

const ProjectTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {data.map((el, i) => (
              <TableCell
                key={i}
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  fontFamily: "poppins",
                }}
                align="left"
              >
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                fontSize: "1rem",
                fontFamily: "poppins",
              }}
            >
              <TableCell align="left">{i + 1}</TableCell>
              <TableCell align="left" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                <ProgressBar now={row.calories} label={`${row.calories}%`} />
              </TableCell>
              <TableCell align="left">
                <span className="badge badge-info bg-info ">{row.fat}</span>
              </TableCell>
              <TableCell align="left">
                <input className="btn btn-primary" type="button" value="view" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
