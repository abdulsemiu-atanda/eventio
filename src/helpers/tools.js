export const noop = () => {}

export const fullName = ({firstName, lastName}) => `${firstName} ${lastName}`.trim()

export const constructInitials = ({firstName, lastName}) => `${firstName[0]}${lastName[0]}`

export const clearResponse = (response, headers) => {
  if (Array.isArray(response)) return response
  else return {...response, ...headers}
}

export const isEqual = (currentValue, previousValue) => currentValue.length === previousValue.length

export const isEventOwner = (owner, user) => owner.id === user.id

export const isAttending = (attendees, user) =>
  attendees.filter(attendee => attendee.id === user.id).length

export const eventButtonText = (event, user) => {
  if (isAttending(event.attendees, user)) return 'leave'
  else if (isEventOwner(event.owner, user)) return 'edit'
  else return 'join'
}

export const eventsHasBeenUpdated = (previousValue, currentValue) =>
  previousValue.length > 0 &&
  previousValue.some(event => {
    const updatedEvent = currentValue.find(currentEvent => currentEvent.id === event.id)

    return event.attendees.length !== updatedEvent.attendees.length
  })

export const dateToISOString = date => new Date(date).toISOString()
