/**
 * @class SignInForm
 * @desc
 * Component that constructs form and handles user interactions
 * @property {Boolean} loading - SIGN request status
 * @property {Function} signUp - SIGN IN action dispatcher
 * @returns SignInForm
 * @example
 * <SignInForm loading={this.props.loading} signUp={this.props.signUp} />
 */
import React from 'react'
import {connect} from 'react-redux'

import Form from './shared/Form.react'
import FormField from './shared/FormField.react'
import {FloatingLabelInputWithError} from './shared/Input.react'
import {Button} from './shared/Buttons.react'

import {asyncRequest as signUp} from '../helpers/reduxHelpers'
import {SIGN_IN} from '../redux/actionTypes/userActions'
import validators from '../helpers/validators'

import './signInForm.scss'

class SignInForm extends React.Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit() {
    const errors = this.refs.form.validate().filter(error => error.error)

    if (!errors.length) {
      this.props.signUp(
        {
          endpoint: '/auth/native',
          ACTION_NAME: SIGN_IN,
          payload: this.refs.form.formData(),
          method: 'post'
        }
      )
    }

    console.log(this.refs.form.formData())
  }

  render() {
    return (
      <div className='sign-in-form'>
        <h4>Sign in into Eventio.</h4>
        <p>Enter your details below.</p>
        <Form ref='form'>
          <FormField name='email' validator={validators.emailValidator}>
            <FloatingLabelInputWithError name='email' label='Email' />
          </FormField>
          <FormField name='password' validator={validators.passwordValidator}>
            <FloatingLabelInputWithError name='password' label='Password' type='password' />
          </FormField>
          <Button
            className='big'
            processing={this.props.loading}
            onClick={this.onSubmit}>
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => ({loading: auth.signInLoading, user: auth.user})

export default connect(mapStateToProps, {signUp})(SignInForm)
