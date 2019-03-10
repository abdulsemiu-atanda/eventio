import React from 'react'
import {withRouter} from 'react-router-dom'

import DropdownBase from '../shared/dropdown/DropdownBase.react'
import {getToken, decodeToken, removeToken} from '../../helpers/authHelpers'
import {constructInitials, fullName} from '../../helpers/tools'

import './profileBadge.scss'

class ProfileBadge extends React.Component {
  constructor() {
    super()

    this.user = decodeToken(getToken('authToken')).user
    this.state = {showBadge: false}

    this.logOut = this.logOut.bind(this)
    this.toggleBadgeDisplay = this.toggleBadgeDisplay.bind(this)
  }

  toggleBadgeDisplay() { this.setState({showBadge: !this.state.showBadge})}

  logOut() {
    removeToken(['authToken', 'refresh-token'])
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='profile-badge'>
        <div className='initials'>
          <span>{constructInitials(this.user)}</span>
        </div>
        <DropdownBase show={this.state.showBadge} launcher={() => (<div onClick={this.toggleBadgeDisplay} className='name'>{fullName(this.user)}</div>)}>
          <span onClick={this.logOut}>Log out</span>
        </DropdownBase>
      </div>
    )
  }
}

export default withRouter(ProfileBadge)
