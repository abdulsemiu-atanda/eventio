import React from 'react'
import {connect} from 'react-redux'

import {Button} from '../../shared/button/Buttons.react'
import Form from '../../shared/form/Form.react'
import FormField from '../../shared/form/FormField.react'
import {FloatingLabelInputWithError} from '../../shared/input/Input.react'

import {asyncRequest} from '../../../helpers/reduxHelpers'
import {dateToISOString} from '../../../helpers/tools'
import {getToken} from '../../../helpers/authHelpers'
import {NEW_EvENT} from '../../../redux/actionTypes/eventActions'
import validators from '../../../helpers/validators'

import './newEventForm.scss'

class NewEventForm extends React.Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    const formData = this.refs.form.formData()
    const errors = this.refs.form.validate().filter(error => error.error)

    if (!errors.length) {
      const payload = {
        title: formData.title,
        description: formData.description,
        capacity: formData.capacity,
        startsAt: dateToISOString(`${formData.date} ${formData.time}`)
      }

      this.props.asyncRequest({
        endpoint: '/events',
        ACTION_NAME: NEW_EvENT,
        payload,
        method: 'post',
        token: getToken('authToken')
      })
      this.props.closeModal()
    }
    console.log(this.refs.form.formData())
  }

  render() {
    return (
      <div className='new-event-form'>
        <h4>Create new event.</h4>
        <p>Enter details below.</p>
        <Form ref='form'>
          <FormField name='title' validator={validators.required}>
            <FloatingLabelInputWithError name='title' label='Event Title' type='text' />
          </FormField>
          <FormField name='description' validator={validators.required}>
            <FloatingLabelInputWithError name='description' label='Description' type='text' />
          </FormField>
          <FormField name='date' validator={validators.dateValidator}>
            <FloatingLabelInputWithError name='date' type='date' />
          </FormField>
          <FormField name='time' validator={validators.required}>
            <FloatingLabelInputWithError name='time' placeholder='Time' type='time' />
          </FormField>
          <FormField name='capacity' validator={validators.numberValidator}>
            <FloatingLabelInputWithError name='capacity' type='number' placeholder='Capacity' />
          </FormField>
          <Button className='big' onClick={this.onSubmit}>
            Create Event
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({newEvent}) => ({...newEvent})

export default connect(
  mapStateToProps,
  {asyncRequest}
)(NewEventForm)
