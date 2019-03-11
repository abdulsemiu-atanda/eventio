import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import ProfileBadge from './ProfileBadge.react'

import {authText, signUpActive, isLoggedIn} from '../../helpers/authHelpers'

import eventioDark from '../../assets/images/eventioDark.png'
import eventioLogo from '../../assets/images/eventioLogo.png'

import './header.scss'

const Header = ({location}) => (
  <header>
    <img alt='Eventio Logo' src={(isLoggedIn() || outerWidth < 900) ? eventioDark : eventioLogo} />
    {isLoggedIn() ? (
      <ProfileBadge />
    ) : (
      <p className='uanuthenticated'>
        <span>{authText({location}).prompt}</span>
        <Link to={signUpActive({location}) ? '/' : '/sign-up'}>
          {authText({location}).linkText}
        </Link>
      </p>
    )}
  </header>
)

Header.propTypes = {location: PropTypes.object}

export default withRouter(Header)
