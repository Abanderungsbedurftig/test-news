import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Routes } from '../Routes/Routes'
import { Login } from '../Login/Login'

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Routes />
        </Route>
      </Switch>
    </Router>
  )
}
