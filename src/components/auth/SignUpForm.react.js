/**
 * @class SignUpForm
 * @desc
 * Component that constructs sign up form and handles SIGN UP actions
 * @property {Boolean} loading - SIGN UP request status
 * @property {Function} signUp - Dspatches SIGN UP actions
 * @returns SignUpForm
 * @example
 * <SignUpForm loading={this.props.loading} signUp={this.props.signUp} />
 */

import React from 'react'
import {connect} from 'react-redux'

import Form from '../shared/Form.react'
import FormField from '../shared/FormField.react'
import {FloatingLabelInputWithError} from '../shared/Input.react'
import {Button} from '../shared/Buttons.react'

import {asyncRequest as signUp} from '../../helpers/reduxHelpers'
import {SIGN_UP} from '../../redux/actionTypes/authActions'
import validators from '../../helpers/validators'

import './signUpForm.scss'

class SignUpForm extends React.Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    const errors = this.refs.form.validate().filter(error => error.error)

    if (!errors.length) {
      this.props.signUp(
        {
          endpoint: '/users',
          ACTION_NAME: SIGN_UP,
          payload: this.refs.form.formData(),
          method: 'post'
        }
      )
    }
    console.log(this.refs.form.formData())
  }

  render() {
    return (
      <div className='sign-up-form'>
        <h4>Get started absolutely free.</h4>
        <p>Enter your details below.</p>
        <Form ref='form'>
          <FormField name='firstName' validator={validators.required}>
            <FloatingLabelInputWithError name='firstName' label='First Name' />
          </FormField>
          <FormField name='lastName' validator={validators.required}>
            <FloatingLabelInputWithError name='lastName' label='Last Name' />
          </FormField>
          <FormField name='email' validator={validators.emailValidator}>
            <FloatingLabelInputWithError name='email' label='Email' />
          </FormField>
          <FormField name='password' validator={validators.passwordValidator}>
            <FloatingLabelInputWithError name='password' label='Password' type='password' />
          </FormField>
          <FormField name='repeat-password' validator={validators.confirmPasswordValidator}>
            <FloatingLabelInputWithError name='repeat-password' label='Repeat Password' type='password' />
          </FormField>
          <Button
            className='big'
            processing={this.props.processing}
            onClick={this.onSubmit}>
            SIGN UP
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => ({loading: auth.signUpLoading, user: auth.user})

export default connect(mapStateToProps, {signUp})(SignUpForm)
