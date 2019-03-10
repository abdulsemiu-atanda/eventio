import {combineReducers} from 'redux'

import auth from './authReducers'
import events from './eventReducers'
import eventActions from './eventActionsReducers'
import newEvent from './newEventReducers'

const rootReducer = combineReducers({auth, events, eventActions, newEvent})

export default rootReducer
