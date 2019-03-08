import axios from 'axios'

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
 * @param {String} token - User access token
 * @returns {Function}
 */
export const asyncRequest = (endpoint, ACTION_NAME, token) => dispatch => {
  dispatch(asyncActions(ACTION_NAME).loading(true))

  axios.get(`${API_URL}${endpoint}`, {headers: axiosHeaders({token})})
  .then(response => {
    dispatch(asyncActions(ACTION_NAME).success(response.data))
  }).catch(err => dispatch(asyncActions(ACTION_NAME).failure(true, err)))
}