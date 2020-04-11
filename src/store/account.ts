import { Reducer } from 'redux'

import { UserInfo, ErrorInfo } from '../types'
import  { Action, Actions } from '../actions/actions'

export type StateAccount = Readonly<UserInfo & ErrorInfo>

export const accountDefState: StateAccount = {
  login: null,
  isAuth: false,
  isError: false
}

export const account: Reducer<StateAccount, Action> = (state = accountDefState, action): StateAccount => {
  switch (action.type) {
    case Actions.CHANGE_ACCOUNT:
      return { ...state, ...action.data }
    case Actions.SET_AUTH_ERROR:
      return { ...state, ...action.data }
    default:
      return state
  }
}