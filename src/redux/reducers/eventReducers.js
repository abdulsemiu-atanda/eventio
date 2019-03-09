import {asyncActionNames} from '../../helpers/reduxHelpers'
import {EVENTS} from '../actionTypes/eventActions'

const initialState = {
  events: [],
  error: {status: false, message: ''},
  loading: false
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
      return {...state, events: action.data}
    default:
      return state
  }
}

export default eventReducers
