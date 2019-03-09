import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Loader from './Loader.react'

import {noop} from '../../helpers/tools'

import './buttons.scss'

export const Button = ({children, processing, ...otherProps}) => (
  <button
    className={classnames('core', otherProps.className, {processing})}
    onClick={processing ? noop : otherProps.onClick}
    type='button'>
    {processing ? <Loader loading={processing} /> : children}
    </button>
)

Button.propTypes = {processing: PropTypes.bool}

export const CircularButton = ({children, ...otherProps}) => (
  <button
    className={classnames('circle', otherProps.className)}
    onClick={otherProps.onClick}
    type='button'>
    {children}
  </button>
)

Button.defaultProps = {children: 'Accept'}