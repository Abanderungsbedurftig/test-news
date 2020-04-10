import React from 'react'

export const Login: React.FC = () => {
  return (
    <div>
      <form>
        <div className='form-group'>
          <input type='text' name='login' placeholder='Login:'/>
        </div>
        <div className='form-group'>
          <input type='text' name='password' placeholder='Password:'/>
        </div>
        <button>Sign in</button>
        <div className='error-message'>Имя пользователя или пароль введены не верно</div>
      </form>
    </div>
  )
}