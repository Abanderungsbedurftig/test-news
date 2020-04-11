import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { PagePath } from '../../types'
import { StateAccount } from '../../store/account'

type PrivateRouteProps = {
  children: React.ReactElement
  path: PagePath
}

type ConnectedProps = {
  isAuth: boolean
}

const PrivateRouteCmp: React.FC<PrivateRouteProps & ConnectedProps> = ({ children, isAuth, path }) => {
  return (
    <Route path={path} render={({ location }) =>
        isAuth ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
    } />
  );
}

const mapStateToProps = (state: StateAccount): ConnectedProps => ({ isAuth: state.isAuth })

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteCmp)