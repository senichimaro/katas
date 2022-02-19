import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



import 'bootswatch/dist/lux/bootstrap.min.css';



// class App extends React.Component {
export default function App() {
  // render(){
    return (
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/contact">
            <ParentRoute/>
          </Route>

        </Switch>
      </Router>
    )
  // }
}

function Home() {
  return <h2>Home</h2>;
}

function ParentRoute(){
  let { path, url } = useRouteMatch();
  console.log("path",path);
  return(
    <div>
      <Switch>
        <Route exact path={path}>
          <h3>Contact</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <ChildRoute/>
        </Route>
      </Switch>
    </div>
  );
}

function ChildRoute(){
  let { topicId } = useParams();
  console.log("topicId", topicId);
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

// export default App;
