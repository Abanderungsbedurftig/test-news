import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { UserInfo, ErrorInfo, AuthFields } from '../types'
import { StateAccount } from '../store/account'
import { fetchData } from '../utils/request'

type A<T, D> = {
  type: T,
  data: D
}

const action = <T, D>(type: T, data: D) => ({ type, data })

// tslint:disable-next-line: no-namespace
export namespace Actions {
  export const CHANGE_ACCOUNT: 'CHANGE_ACCOUNT' = 'CHANGE_ACCOUNT'
  export type ChangeAccount = A<typeof CHANGE_ACCOUNT, UserInfo>

  export const SET_AUTH_ERROR: 'SET_AUTH_ERROR' = 'SET_AUTH_ERROR'
  export type SetAuthError = A<typeof SET_AUTH_ERROR, ErrorInfo>
}

export type Action = Actions.ChangeAccount | Actions.SetAuthError

export const changeAccountAction = (data: AuthFields): ThunkAction<Promise<void>, StateAccount, void, Action> => {
  return async (dispatch: ThunkDispatch<StateAccount, void, Action>): Promise<void> => {
    const send = await fetchData(data)

    if (send) {
      dispatch(action(Actions.CHANGE_ACCOUNT, { login: data.login, isAuth: true }))
      dispatch(action(Actions.SET_AUTH_ERROR, { isError: false }))
    } else {
      dispatch(action(Actions.SET_AUTH_ERROR, { isError: true }))
    }
  }
}

export const clearErrorAction = (): ThunkAction<void, StateAccount, void, Action> => {
  return (dispatch: ThunkDispatch<StateAccount, void, Action>): void => {
    dispatch(action(Actions.SET_AUTH_ERROR, { isError: false }))
  }
}