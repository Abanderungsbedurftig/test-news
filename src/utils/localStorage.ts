import { StateAccount } from '../store/account'

export const loadStore = (): StateAccount | null => {
  try {
    const serializedData = localStorage.getItem('redux-store')
      if (!serializedData) {
        return null
      }
      return JSON.parse(serializedData)
  } catch (err) {
    return null
  }
}

export const saveStore = (state: StateAccount): void => {
  try {
    const serializedData = JSON.stringify(state)
    localStorage.setItem('redux-store', serializedData)
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.error(err)
  }
}