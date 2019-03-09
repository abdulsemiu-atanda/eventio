import {combineReducers} from 'redux'

import auth from './authReducers'
import events from './eventReducers'

const rootReducer = combineReducers({auth, events})

export default rootReducer
