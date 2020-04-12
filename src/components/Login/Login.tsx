import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { StateAccount } from '../../store/account'
import { AuthFields } from '../../types'
import { Action, changeAccountAction, clearErrorAction } from '../../actions/actions'

import './Login.scss'

type ChangeEventFields = {
  name: string
  value: string
}

type LoginConnectedProps = {
  isAuth: boolean
  isError: boolean
}

type LoginConnectedDispatch = {
  onSubmit: (params: AuthFields) => Promise<void>
  onClearError: () => void
}

type LoginProps = LoginConnectedProps & LoginConnectedDispatch

const LoginCmp: React.FC<LoginProps> = ({ isError, isAuth, onSubmit, onClearError }) => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const history = useHistory()

  useEffect(() => {
    return () => onClearError()
  }, [])

  useEffect(() => {
    if (isAuth) {
      history.push('/profile')
    }
  }, [isAuth])

  useEffect(() => {
    setIsValid(!!login && !!password)
  }, [login, password])

  const changeValue = (e: React.ChangeEvent<ChangeEventFields>) => {
    const { name, value } = e.currentTarget

    switch (name) {
      case 'login':
        setLogin(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  const submitForm = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onSubmit({ login, password })
  }

  return (
    <div className='wrapper'>
      <form>
        <div className='form-group'>
          <input type='text' name='login' placeholder='Login:' value={login} onChange={changeValue}/>
        </div>
        <div className='form-group'>
          <input type='text' name='password' placeholder='Password:' value={password} onChange={changeValue}/>
        </div>
        <div className='form-group'>
          <button disabled={!isValid} onClick={submitForm}>Sign in</button>
        </div>
        {isError && <div className='error-message'>Имя пользователя или пароль введены не верно</div>}
        <span className='back-btn' onClick={() => history.goBack()}>&larr; Go back</span>
      </form>
    </div>
  )
}

const mapStateToProps = (state: StateAccount): LoginConnectedProps => ({ isError: state.isError, isAuth: state.isAuth })

const mapDispatchToProps = (dispatch: ThunkDispatch<StateAccount, void, Action>) => {
  return {
    onSubmit: (params: AuthFields) => dispatch(changeAccountAction(params)),

    onClearError: () => dispatch(clearErrorAction()),
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginCmp)