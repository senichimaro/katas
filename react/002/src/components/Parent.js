import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

// Child component
import Child from './Child'

/** Routes Configuration : First Level
*/
//  Parent:
// Parent route have to be exact
//
// Child:
// Child route have NOT to be exact

export default function Parent(){
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <h2>{path}</h2>
        <Child />
      </Route>
      <Route path={`${path}/:child`}>
        <h2>{path}</h2>
        <Child />
      </Route>
    </Switch>
  )
}
