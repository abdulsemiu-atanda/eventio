import BaseModal from './BaseModal.react'
import modalFactory from './modalFactory.react'

import './modals.scss'

export const Modal = modalFactory(BaseModal, 'baseModal', 'base-modal')
