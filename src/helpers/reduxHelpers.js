import axios from 'axios'

import {cleanRequestHeaders} from './authHelpers'

/**
 * Constructs async actions constants
 * @param {string} baseName
 * @returns {Object}
 */
export const asyncActionNames = baseName => ({
  failure: `${baseName}_FAILURE`,
  loading: `${baseName}_LOADING`,
  success: `${baseName}_SUCCESS`
})

/**
 * Constructs Redux async actions
 * @param {string} actionName
 * @returns {Object}
 */
export const asyncActions = (actionName) => ({
  loading: bool => ({
    type: asyncActionNames(actionName).loading,
    data: bool
  }),
  failure: (bool, error) => ({
    type: asyncActionNames(actionName).failure,
    data: {error, status: bool}
  }),
  success: data => ({
    type: asyncActionNames(actionName).success,
    data
  })
})

/**
 * Constructs axios request headers
 * @param {String} token - User access token
 * @returns {Object} 
 */
export const axiosHeaders = ({token}) => {
  if (token)
    return {Authorization: token, APIKey: API_KEY}
  else
    return {APIKey: API_KEY}
}

/**
 * Dispatches redux actions
 * @param {String} endpoint - API endpoint
 * @param {String} ACTION_NAME - name of dispatched action
 * @param {Object} payload - Request payload
 * @param {String} method = HTTP verb (get, post, patch, put)
 * @param {String} token - User access token
 * @returns {Function}
 */
export const asyncRequest = ({endpoint, ACTION_NAME, payload, method, token}) => dispatch => {
  dispatch(asyncActions(ACTION_NAME).loading(true))
  console.log(axiosHeaders({token}))

  axios({method, url:`${API_HOST}${endpoint}`, data: payload ? payload : {}, headers: axiosHeaders({token})})
  .then(response => {
    dispatch(asyncActions(ACTION_NAME).success({...response.data, ...cleanRequestHeaders(response.headers)}))
  }).catch(err => dispatch(asyncActions(ACTION_NAME).failure(true, err)))
}