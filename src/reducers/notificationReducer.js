const notificationsAtStart = [null]
  const getId = () => (100000 * Math.random()).toFixed(0)
  const asObject = () => {
    return {
      content: ''
    }
  }
  export const setNotification = (content) => {
    return {
      type: 'SET',
      data: { content }
    }
  }
  export const rmNotification = (content) => {
    return {
      type: 'REMOVE',
      data: { content }
    }
  }
const initialState = notificationsAtStart[0]
//const initState= [asObject]
const notificationReducer = (state = initialState, action) => {
    //console.log('notification state now: ', state)
    //console.log('notification action', action.type)
    switch (action.type) {
      case 'SET':
        //console.log ("notificationReducer, voted for:",action.data.content)
        const newState = "You have voted for".concat(' \'',action.data.content,'\'')
        return newState
        
      case 'REMOVE':
        return initialState
      default:
        return state
    }
    
}

export default notificationReducer
