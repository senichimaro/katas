import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Bootswatch Stylesheet
import 'bootswatch/dist/lux/bootstrap.min.css';
// Import Bootstrap Bundle Js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Parent from './components/Parent'
import Form from './components/Form'
import Nav from './components/Nav'

function App(){
  return (
    <Fragment>

      <h1 className="m-3">Travel App</h1>

      <Router>

        <Nav />

        <Switch>

          <Route path="/travel">
            <Parent />
          </Route>

          <Route path="/rent">
            <Parent />
          </Route>

          <Route path="/booking">
            <Form />
          </Route>

        </Switch>
      </Router>

    </Fragment>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
