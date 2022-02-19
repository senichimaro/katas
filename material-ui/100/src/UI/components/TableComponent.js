// import modules
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Table, TableContainer, TableRow,
  TableBody, TableHead, TableCell, Paper
} from '@material-ui/core';


// material-ui styles
const useStyles = makeStyles({
  table:{
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein){
  return { name, calories, fat, carbs, protein }
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);



const TableComponent = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} arial-label="simple table">

        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs(g)</StyledTableCell>
            <StyledTableCell align="right">Proteins(g)</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            rows.map( row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default TableComponent;
