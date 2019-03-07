import React from 'react'
import classnames from 'classnames'

import {noop} from '../../helpers/tools'

import './buttons.scss'

export const Button = ({children, processing, ...otherProps}) => (
  <button
    className={classnames('core', otherProps.className, {processing})}
    onClick={processing ? noop : otherProps.onClick}
    type='button'>
    {children}
    </button>
)

Button.defaultProps = {children: 'Accept'}