import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootstrap-icons/font//bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/js/dist/modal.js'

import FormPage from './components/FormPage'
import HomePage from './components/HomePage'
import Nav from './components/Nav'

const Index = () => {

  return (
    <Router>
      <Switch>

        <Route exact path="/new" component={FormPage} />

        <Route exact path="/edit" component={FormPage} />

        <Route exact path="/">
          <Nav />
          <HomePage />
        </Route>

      </Switch>
    </Router>
  )
}

render(
  <Index />, document.getElementById('root')
)
