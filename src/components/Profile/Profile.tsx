import React from 'react'

import { userpicUrl, profileText } from '../../const'

import './Profile.scss'

export const Profile: React.FC = () => {
  return (
    <div className='profile-container'>
      <img src={userpicUrl} alt='userpic' />
      <div className='profile-info'>
        <h2>Profile info</h2>
        <p>{profileText}</p>
      </div>
    </div>
  )
}