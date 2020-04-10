import { Reducer } from 'redux'

import { UserInfo } from '../types'
import  { Action, Actions } from '../actions/actions'

export type StateAccount = Readonly<UserInfo>

const accountDefState: StateAccount = {
  login: null,
  isAuth: false
}

export const account: Reducer<StateAccount, Action> = (state = accountDefState, action): StateAccount => {
  switch (action.type) {
    case Actions.CHANGE_ACCOUNT:
      return { ...state, ...action.data }
    default:
      return state
  }
}