import React from 'react'

import DropdownBase from '../shared/dropdown/DropdownBase.react'
import {getToken, decodeToken} from '../../helpers/authHelpers'
import {constructInitials, fullName} from '../../helpers/tools'

import './profileBadge.scss'

const {user} = decodeToken(getToken('authToken'))

class ProfileBadge extends React.Component {
  constructor() {
    super()

    this.state = {showBadge: false}
    this.toggleBadgeDisplay = this.toggleBadgeDisplay.bind(this)
  }

  toggleBadgeDisplay() { this.setState({showBadge: !this.state.showBadge})}

  render() {
    return (
      <div className='profile-badge'>
        <div className='initials'>
          <span>{constructInitials(user)}</span>
        </div>
        <DropdownBase show={this.state.showBadge} launcher={() => (<div onClick={this.toggleBadgeDisplay} className='name'>{fullName(user)}</div>)}>
          <span>Log out</span>
        </DropdownBase>
      </div>
    )
  }
}

export default ProfileBadge
