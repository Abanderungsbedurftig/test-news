import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import { Home } from '../Home/Home'
import { News } from '../News/News'
import { Profile } from '../Profile/Profile'
import { Error404 } from '../Error/Error'
import { PrivateRoute } from '../PrivateRoute/PrivateRoute'

import './Routes.scss'

export const Routes: React.FC = () => {
  return (
    <div className='app'>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='nav-active'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/news' activeClassName='nav-active'>News</NavLink>
            </li>
            <li>
              <NavLink to='/profile' activeClassName='nav-active'>Profile</NavLink>
            </li>
          </ul>
        </nav>
      </header>
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
