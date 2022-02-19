
import logo from './logo.svg';
import './App.css';

// import Material UI components
import { Typography, Grid, Container } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="sm">

          <Typography variant="h5" component="h1">
            Welcome to Auth0 kata
          </Typography>

          <Typography variant="body1">
          This kata set a user authentication & authorization system and protect routes
          from unauthorized or not loged in users.
          It consist two routes: this route that is root, /books route
          that has restricted access and redirect to Log In Auth0 external page.
          </Typography>

        </Container>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To access Books at <code>/books</code> route is required to Log In.
        </p>

        <Grid>
          <a
            className="App-link"
            style={{margin:'0 1rem'}}
            href="/books"
            target="_blank"
            rel="noopener noreferrer"
          >
            Books
          </a>
          <a
            className="App-link"
            href="/profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </a>
        </Grid>
      </header>
    </div>
  );
}

export default App;
