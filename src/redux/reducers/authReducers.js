import {asyncActionNames} from '../../helpers/reduxHelpers'
import {SIGN_IN, SIGN_UP} from '../actionTypes/authActions'

const inittialState = {
  signInLoading: false,
  user: {},
  signUpLoading: false,
  error: {
    signUpError: {status: false, message: ''},
    signInError: {status: false, message: ''}
  }
}

const authReducer = (state = inittialState, action) => {
  switch (action.type) {
    case asyncActionNames(SIGN_IN).loading:
      return {...state, signInLoading: action.data}
    case asyncActionNames(SIGN_IN).failure:
      return {
        ...state,
        signInLoading: false,
        error: {
          ...state.error,
          signInError: {
            status: action.data.status,
            message: action.data.error
          }
        }
      }
    case asyncActionNames(SIGN_IN).success:
      return {...state, signInLoading: false, user: {...state.user, ...action.data}}
    case asyncActionNames(SIGN_UP).loading:
      return {...state, signUpLoading: action.data}
    case asyncActionNames(SIGN_UP).failure:
      return {
        ...state,
        signUpLoading: false,
        error: {
          ...state.error,
          signUpError: {
            status: action.data.status,
            message: action.data.error
          }
        }
      }
    case asyncActionNames(SIGN_UP).success:
      return {...state, signUpLoading: false, user: {...state.user, ...action.data}}
    default:
      return state
  }
}

export default authReducer
