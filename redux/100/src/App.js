import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

// import Pages
import Table from './UI/Pages/Table'
import Form from './UI/Pages/Form'
import Read from './UI/Pages/Read'

// import components
import NavEl from './UI/components/NavEl'


// init QueryClient
const queryClient = new QueryClient();

const App = () => {

  return (
    <>
    <Router>

      <NavEl />

      <Switch>

        <Route exact path="/">
          <QueryClientProvider client={queryClient}>
            <Table />
          </QueryClientProvider>
        </Route>

        <Route path="/form">
          <QueryClientProvider client={queryClient}>

            <Route exact path="/form/" component={ Form } />

            <Route path="/form/:_id" component={ Form } />

          </QueryClientProvider>
        </Route>

        <Route exact path="/read">
          <Read />
        </Route>

      </Switch>
    </Router>
    </>
  )
}

export default App;
