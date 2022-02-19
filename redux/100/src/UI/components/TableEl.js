import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Actions icons
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  link:{
    color:theme.palette.grey['A700'],
    textDecoration: 'none'
  }
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
//
// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


const TableEl = ({ data }) => {
  const classes = useStyles();
  // console.log("TableEl",data);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            {/*<TableCell align="right">Image</TableCell>*/}
            <TableCell align="right">Tags</TableCell>
            <TableCell align="right">Keywords</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((row, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.paragraph}</TableCell>
              {
                row.imgUrl && <TableCell align="right">{row.imgUrl}</TableCell>
              }
              <TableCell align="right">{row.tags}</TableCell>
              <TableCell align="right">{row.keywords}</TableCell>
              <TableCell align="right">
                <Link className={classes.link} to="/"><DescriptionIcon /></Link>
                <Link className={classes.link} to={ "/form/" + row._id}><BorderColorIcon /></Link>
                <Link className={classes.link} to={ "/delete/" + row._id}><DeleteIcon /></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default TableEl;
