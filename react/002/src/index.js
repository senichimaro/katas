import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Bootswatch Stylesheet
import 'bootswatch/dist/lux/bootstrap.min.css';

// Parent component
import Parent from './components/Parent'
import ReactForms from './components/ReactForms'

/** Routes Configuration : root
*/
//  base level:
// Routes have not to be exact at the base level


export default function App(){
  return (
      <Router>
      <h1>Travel App</h1>
        <Switch>
          <Route path="/travel">
            <Parent />
          </Route>
          <Route path="/rent">
            <Parent />
          </Route>
          <Route path="/booking">
            <ReactForms />
          </Route>
        </Switch>
      </Router>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'))
