const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const voteOf = (id) => {
  return {
    type: 'INCREMENT',
    data: { id }
  }
}
export const createAnecdote=(content)=>{
  return {
    type: 'NEW',
    data: { 
            content:content,
            id:getId(),
            votes:0
          }
  }
}

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INCREMENT':
      const changedRecord=state.filter(record =>record.id===action.data.id)[0]
      changedRecord.votes+=1
      const otherRecords=state.filter(record=>record.id !==action.data.id)
      console.log('changed record=',changedRecord)
      const newState=otherRecords.concat(changedRecord)
      newState.sort((firstItem, secondItem) =>  secondItem.votes- firstItem.votes)
      return newState
    
    case 'NEW':
      return state.concat(action.data)
    default:
      return state
  }
  
}

export default anecdoteReducer