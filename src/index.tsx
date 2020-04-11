import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { App } from './components/App/App'
import { account, accountDefState } from './store/account'
import { saveStore, loadStore } from './utils/localStorage'

const initStore = loadStore() || accountDefState
const store = createStore(account, initStore, applyMiddleware(thunk))

store.subscribe(() => {
  saveStore(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)