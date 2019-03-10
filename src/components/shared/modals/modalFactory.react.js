import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import modalWrapper, {MODAL_CONTEXT_TYPES} from './ModalWrapper.react'

const ModalLauncher = ({launcher, showModal}) => React.cloneElement(launcher, {onClick: showModal})

const modalFactory = (ModalComponent, displayName, topLevelClassName) => {
  const NewModalType = ({className, launcher, ...otherProps}) => {
    return (
    <div className={classnames('core modal', topLevelClassName, className)}>
      {launcher && <ModalLauncher launcher={launcher} showModal={otherProps.launchModal} />}
      <ModalComponent topLevelClassName={topLevelClassName} {...otherProps} />
    </div>
  )
}

  NewModalType.contextTypes = MODAL_CONTEXT_TYPES

  NewModalType.displayName = displayName

  NewModalType.propTypes = {launcher: PropTypes.node}

  return modalWrapper(NewModalType)
}

export default modalFactory
