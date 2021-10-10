const notificationsAtStart = [
    'First notification'
  ]
  const getId = () => (100000 * Math.random()).toFixed(0)
  const asObject = (notification) => {
    return {
      content: notification,
      id: getId()
    }
  }
const initialState = notificationsAtStart[0]
const notificationReducer = (state = initialState, action) => {
    console.log('notification state now: ', state)
    console.log('notification action', action)
    return state[0]
}

export default notificationReducer
