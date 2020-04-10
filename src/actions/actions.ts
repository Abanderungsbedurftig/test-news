import { UserInfo } from '../types'

type A<T, D> = {
  type: T,
  data: D
}

// tslint:disable-next-line: no-namespace
export namespace Actions {
  export const CHANGE_ACCOUNT: 'CHANGE_ACCOUNT' = 'CHANGE_ACCOUNT'
  export type ChangeAccount = A<typeof CHANGE_ACCOUNT, UserInfo>
}

export type Action = Actions.ChangeAccount