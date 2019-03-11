/**
 * @class SignInForm
 * @desc
 * Component that constructs form and handles user interactions
 * @property {Boolean} loading - SIGN request status
 * @property {Function} signIn - SIGN IN action dispatcher
 * @returns SignInForm
 * @example
 * <SignInForm loading={this.props.loading} signIn={this.props.signIn} />
 */
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import Form from '../shared/form/Form.react'
import FormField from '../shared/form/FormField.react'
import {FloatingLabelInputWithError} from '../shared/input/Input.react'
import {Button} from '../shared/button/Buttons.react'

import {asyncRequest as signIn} from '../../helpers/reduxHelpers'
import {setToken, removeToken} from '../../helpers/authHelpers'
import {SIGN_IN} from '../../redux/actionTypes/authActions'
import validators from '../../helpers/validators'

import './signInForm.scss'

class SignInForm extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    removeToken(['authToken', 'refresh-token'])
  }

  static getDerivedStateFromProps(nextProps) {
    const {user} = nextProps

    if (user.authorization) {
      setToken('authToken', user.authorization)
      setToken('refresh-token', user['refresh-token'])
      nextProps.history.push('dashboard')
    }

    return null
  }

  onSubmit() {
    const errors = this.refs.form.validate().filter(error => error.error)

    if (!errors.length) {
      this.props.signIn({
        endpoint: '/auth/native',
        ACTION_NAME: SIGN_IN,
        payload: this.refs.form.formData(),
        method: 'post'
      })
    }
  }

  render() {
    return (
      <div className='sign-in-form'>
        <h4>Sign in into Eventio.</h4>
        {this.props.error.status && (
          <p className='sign-in-error'>Oops! that email and password combination is not valid.</p>
        )}
        <p>Enter your details below.</p>
        <Form ref='form'>
          <FormField name='email' validator={validators.emailValidator}>
            <FloatingLabelInputWithError name='email' label='Email' />
          </FormField>
          <FormField name='password' validator={validators.passwordValidator}>
            <FloatingLabelInputWithError name='password' label='Password' type='password' />
          </FormField>
          <Button className='big' processing={this.props.loading} onClick={this.onSubmit}>
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

SignInForm.propTypes = {
  error: PropTypes.shape({status: PropTypes.bool}),
  user: PropTypes.object,
  history: PropTypes.object,
  signIn: PropTypes.func
}

const mapStateToProps = ({auth}) => ({
  loading: auth.signInLoading,
  user: auth.user,
  error: auth.error.signInError
})

export default withRouter(
  connect(
    mapStateToProps,
    {signIn}
  )(SignInForm)
)
