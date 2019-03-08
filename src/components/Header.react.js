import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import {authText, signUpActive} from '../helpers/authHelpers'

import eventioLogo from '../assets/images/eventioLogo.png'

import './header.scss'

const Header = ({location}) => (
  <header>
    <img alt='Eventio Logo' src={eventioLogo} />
    <p className='uanuthenticated'>
      <span>{authText({location}).prompt}</span>
      <Link to={signUpActive({location}) ? '/' : '/sign-up'}>{authText({location}).linkText}</Link>
    </p>
  </header>
)

export default withRouter(Header)
