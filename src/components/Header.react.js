import React from 'react'

import eventioLogo from '../assets/images/eventioLogo.png'

import './header.scss'

const Header = () => (
  <header>
    <img alt='Eventio Logo' src={eventioLogo} />
    <span>Don't have an account? SIGN UP</span>
  </header>
)

export default Header
