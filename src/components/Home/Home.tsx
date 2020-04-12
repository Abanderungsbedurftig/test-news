import React from 'react'

import { logoUrl } from '../../const'

import './Home.scss'

export const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <h1>Welcome</h1>
      <img src={logoUrl} alt='logo' />
    </div>
  )
}