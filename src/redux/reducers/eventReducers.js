import moment from 'moment'

import {asyncActionNames} from '../../helpers/reduxHelpers'
import {EVENTS} from '../actionTypes/eventActions'

const initialState = {
  events: [],
  futureEvents: [],
  error: {status: false, message: ''},
  loading: false,
  pastEvents: []
}

const eventReducers = (state = initialState, action) => {
  switch(action.type) {
    case asyncActionNames(EVENTS).loading:
      return {...state, loading: action.data}
    case asyncActionNames(EVENTS).failure:
      return {
        ...state,
        error: {
          ...state.error,
          message: action.data.message,
          status: action.data.status
        },
        loading: false
      }
    case asyncActionNames(EVENTS).success:
      return {
        ...state,
        loading: false,
        events: action.data,
        futureEvents: action.data.filter(event => moment(event.startAt).diff(moment.now()) > 0),
        pastEvents: action.data.filter(event => moment(event.startAt).diff(moment.now()) < 0)
      }
    default:
      return state
  }
}

export default eventReducers
