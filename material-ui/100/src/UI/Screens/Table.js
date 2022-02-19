// import modules
import { Container } from '@material-ui/core'
// Import components
import TableComponent from '../components/TableComponent';
import NavBar from '../components/NavBar';




const Table = () => {

  return (
    <Container>
      <NavBar />
      <TableComponent />
    </Container>
  )
}

export default Table;
