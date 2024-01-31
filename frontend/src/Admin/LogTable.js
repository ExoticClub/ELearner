import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import "./Admin.css";
import information from "../infomation.json";

// API Fetch


const Url=information.API_URL;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
    let ReqData=[{"Title":"None","Link":"404","updatedAt":"ZTZ"}];
const [Learn, setLearn] = useState(ReqData);

useEffect(() => {
  const apiUrl = Url+'/api/log';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(resultData => {
      setLearn(resultData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

console.log(Learn);
  return (
    <TableContainer component={Paper} className='Excal' style={{width:1100}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">RegNo</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Learn.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.RegNo}</StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Department}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}