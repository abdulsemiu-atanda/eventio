import {combineReducers} from 'redux'

import auth from './authReducers'
import events from './eventReducers'
import eventActions from './eventActionsReducers'

const rootReducer = combineReducers({auth, events, eventActions})

export default rootReducer
