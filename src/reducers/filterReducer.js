const filterAtStart = [{
    content:  '' 
}]
  
  export const setFilter = (content) => {
    return {
      type: 'FILTERON',
      data: { content }
    }
  }
  export const resetFilter = (content) => {
    return {
      type: 'FILTEROFF',
      data: { content }
    }
  }
const initialState = filterAtStart[0]
//const initialState=resetFilter('')
const filterReducer = (state = initialState, action) => {
    //console.log('filter state now=', state)
    //console.log('filter action now=', action)
    switch (action.type) {
      case 'FILTERON':
        //console.log ("filter:",action.data.content)
        //console.log ("filterStateContent:",action.data.content)
        const newState = [{
          content:  action.data.content
      }][0]
        return newState
        
      case 'FILTEROFF':
        return initialState
      default:
        return state
    }
    
}

export default filterReducer
