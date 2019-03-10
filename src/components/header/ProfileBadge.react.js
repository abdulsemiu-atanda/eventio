import React from 'react'

import {getToken, decodeToken} from '../../helpers/authHelpers'
import {constructInitials} from '../../helpers/tools'

import './profileBadge.scss'

const ProfileBadge = () => (
  <div className='profile-badge'>
    <span>{constructInitials(decodeToken(getToken('authToken')).user)}</span>
  </div>
)

export default ProfileBadge
