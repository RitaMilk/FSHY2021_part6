const notificationsAtStart = [null]
  const getId = () => (100000 * Math.random()).toFixed(0)
  const asObject = () => {
    return {
      content: ''
    }
  }
  let timeOutID
  export const setNotification = (content,seconds) => {
    //console.log("last notification=",content)
    return async dispatch =>{
      //console.log("time remane=",timeOutID)
      if (timeOutID)
      {clearTimeout(timeOutID)}
      dispatch(setActNotification(content))
      timeOutID=setTimeout(() => {
         dispatch(rmActNotification(content.content))
      }, seconds*1000)
    }
  }
  
  
  export const setActNotification = (content) => {
    return {
      type: 'SET',
      data: { content }
    }
  }
  export const rmActNotification = (content) => {
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
