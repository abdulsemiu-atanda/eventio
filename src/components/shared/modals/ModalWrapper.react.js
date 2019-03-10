import React from 'react'
import PropTypes from 'prop-types'

const ModalContext = React.createContext()

export const MODAL_CONTEXT_TYPES = {
  closeModal: PropTypes.func,
  showModal: PropTypes.func,
  modalClosed: PropTypes.func
}

const modalWrap = Modal => {
  class ModalWrapper extends React.Component {
    constructor() {
      super()

      this.state = {showModal: false}

      this.closeModal = this.closeModal.bind(this)
      this.launchModal = this.launchModal.bind(this)
      this.modalClosed = this.modalClosed.bind(this)
    }

    closeModal() { this.setState({showModal: false}) }

    launchModal() { this.setState({showModal: true}) }

    modalClosed(event) {
      if (event && event.preventDefault)
        event.preventDefault()
      this.closeModal()
    }

    render() {
      return React.cloneElement(
        <Modal showModal={this.state.showModal} {...this.props} />,
        {closeModal: this.closeModal, launchModal: this.launchModal, modalClosed: this.modalClosed}
      )
    }
  }

  ModalWrapper.contextType = ModalContext

  return ModalWrapper
}

export default modalWrap
