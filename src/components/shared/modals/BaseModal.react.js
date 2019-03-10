import React from 'react'
import classnames from 'classnames'

import Closer from './Closer.react'
import {MODAL_CONTEXT_TYPES} from './ModalWrapper.react'

class BaseModal extends React.Component {
  componentDidMount() {
    if (this.props.showModal) {
      this.setModalOpenClassBody(true)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showModal !== this.props.showModal)
      this.setModalOpenClassBody(this.props.showModal)
  }

  componentWillUnmount() {
    if (this.props.showModal)
      this.setModalOpenClassBody(false)
  }

  setModalOpenClassBody(isVisible) {
    const hmtl = document.getElementsByTagName('html')[0].classList

    if (isVisible)
      hmtl.add('core-modal-open')
    else
      hmtl.remove('core-modal-open')
  }

  render() {
    console.log(this.props)
    const CloserComponent = this.props.closerComponent
    const contentsClassName = this.props.topLevelClassName ? `${this.props.topLevelClassName}-contents` : false

    return (
      <div className={classnames('core', 'base-modal', this.props.className)} ref='baseModal'>
        {this.props.showModal && <div className='base-modal-overlay' />}
        {
          this.props.showModal &&
          (
            <div className='base-modal-contents-wrapper' ref='baseModalContentsWrapper'>
              <div className={classnames('base-modal-contents', contentsClassName)}>
                <div className='base-modal-heading-closer'>
                  {
                    this.props.showCloser && (
                      <CloserComponent closer={this.props.modalClosed} />
                    )
                  }
                  {this.props.children}
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

BaseModal.defaultProps = {closerComponent: Closer}

BaseModal.contextTypes = MODAL_CONTEXT_TYPES

export default BaseModal
