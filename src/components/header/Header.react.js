import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import ProfileBadge from './ProfileBadge.react'

import {authText, signUpActive, isLoggedIn} from '../../helpers/authHelpers'

import eventioDark from '../../assets/images/eventioDark.png'
import eventioLogo from '../../assets/images/eventioLogo.png'

import './header.scss'

const Header = ({location}) => (
  <header>
    <img alt='Eventio Logo' src={isLoggedIn() ? eventioDark : eventioLogo} />
    {
      isLoggedIn() ?
      <ProfileBadge /> :
      <p className='uanuthenticated'>
        <span>{authText({location}).prompt}</span>
        <Link to={signUpActive({location}) ? '/' : '/sign-up'}>{authText({location}).linkText}</Link>
      </p>
    }
  </header>
)

export default withRouter(Header)
