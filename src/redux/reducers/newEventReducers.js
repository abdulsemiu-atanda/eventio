import {asyncActionNames} from '../../helpers/reduxHelpers'
import {NEW_EvENT} from '../actionTypes/eventActions'

const initialState = {
  creating: false,
  event: {},
  error: {status: false, message: ''}
}

const newEventReducers = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionNames(NEW_EvENT).loading:
      return {...state, creating: action.data}
    case asyncActionNames(NEW_EvENT).failure:
      return {
        ...state,
        creating: false,
        error: {status: action.data.status, message: action.data.message}
      }
    case asyncActionNames(NEW_EvENT).success:
      return {...state, creating: false, error: {}, event: action.data}
    default:
      return state
  }
}

export default newEventReducers
