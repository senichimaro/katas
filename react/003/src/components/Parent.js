import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

import Child from './Child'

export default function Parent(){
  const { path } = useRouteMatch();
  return (
    <Switch>

      <Route exact path={path}>
          Welcome to { path }
      </Route>

      <Route path={`${path}/:child`}>
          Welcome to { path }
          <Child />
      </Route>

    </Switch>
  )
}
