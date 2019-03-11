import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Closer from './Closer.react'

import eventioDark from '../../../assets/images/eventioDark.png'

class BaseModal extends React.Component {
  componentDidMount() {
    if (this.props.showModal) this.setModalOpenClassBody(true)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showModal !== this.props.showModal)
      this.setModalOpenClassBody(this.props.showModal)
  }

  componentWillUnmount() {
    if (this.props.showModal) this.setModalOpenClassBody(false)
  }

  setModalOpenClassBody(isVisible) {
    const hmtl = document.getElementsByTagName('html')[0].classList

    if (isVisible) hmtl.add('core-modal-open')
    else hmtl.remove('core-modal-open')
  }

  render() {
    const CloserComponent = this.props.closerComponent
    const contentsClassName = this.props.topLevelClassName
      ? `${this.props.topLevelClassName}-contents`
      : false

    return (
      <div className={classnames('core', 'base-modal', this.props.className)} ref='baseModal'>
        {this.props.showModal && <div className='base-modal-overlay' />}
        {this.props.showModal && (
          <div className='base-modal-contents-wrapper' ref='baseModalContentsWrapper'>
            <div className={classnames('base-modal-contents', contentsClassName)}>
              <div className='base-modal-heading-closer'>
                <img alt='Logo' src={eventioDark} />
                {this.props.showCloser && <CloserComponent closer={this.props.modalClosed} />}
              </div>
              {React.cloneElement(this.props.children, {closeModal: this.props.modalClosed})}
            </div>
          </div>
        )}
      </div>
    )
  }
}

BaseModal.defaultProps = {closerComponent: Closer}

BaseModal.propTypes = {
  showModal: PropTypes.bool,
  closerComponent: PropTypes.func,
  topLevelClassName: PropTypes.string,
  className: PropTypes.string,
  showCloser: PropTypes.bool,
  modalClosed: PropTypes.func
}

export default BaseModal
