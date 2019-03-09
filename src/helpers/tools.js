export const noop = () => {}

export const fullName = ({firstName, lastName}) => (`${firstName} ${lastName}`).trim()

export const clearResponse = (response, headers) => {
  if (Array.isArray(response))
    return response
  else
    return {...response, ...headers}
}
