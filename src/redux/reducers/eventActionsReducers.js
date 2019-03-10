import {asyncActionNames} from '../../helpers/reduxHelpers'
import {LEAVE_EVENT, ATTEND_EVENT} from '../actionTypes/eventActions'

const initialState = {
  attending: false,
  attendingError: {status: false, message: ''},
  leaving: false,
  leavingError: {status: false, message: ''},
  left: {id: '', status: false},
  going: {id: '', status: false}
}

const eventActionsReducers = (state = initialState, action) => {
  switch(action.type) {
    case asyncActionNames(LEAVE_EVENT).loading:
      return {...state, leaving: action.data}
    case asyncActionNames(LEAVE_EVENT).failure:
      return {...state, leaving: false, leavingError: {status: action.data.status, message: action.data.error}}
    case asyncActionNames(LEAVE_EVENT).success:
      return {...state, leaving: false, left: {id: action.data.id, status: true}}
    case asyncActionNames(ATTEND_EVENT).loading:
      return {...state, attending: action.data}
    case asyncActionNames(ATTEND_EVENT).failure:
      return {...state, attending: false, attendingError: {status: action.data.status, message: action.data.error}}
    case asyncActionNames(ATTEND_EVENT).success:
      return {...state, attending: false, going: {id: action.data.id, status: true}}
    default:
      return state
  }
}

export default eventActionsReducers
