import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import modules
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import components
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import ProtectedRoute from './auth/protected-route'
import App from './App';
import Books from './components/Books';
import Profile from './components/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Auth0ProviderWithHistory>

          <Route exact path="/" component={App} />

          <ProtectedRoute exact path="/books" component={Books} />

          <Route exact path="/profile" component={Profile} />

        </Auth0ProviderWithHistory>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
