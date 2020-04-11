import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { Home } from '../Home/Home'
import { News } from '../News/News'
import { Profile } from '../Profile/Profile'
import { Error404 } from '../Error/Error'
import { PrivateRoute } from '../PrivateRoute/PrivateRoute'

export const Routes: React.FC = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/news'>
          <News />
        </Route>
        <PrivateRoute path='/profile'>
          <Profile />
        </PrivateRoute>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </div>
  )
}
