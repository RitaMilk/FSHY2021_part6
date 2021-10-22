import anecdoteService from '../services/anecdotes'

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


export const voteOf = (anecdote) => {
  return async dispatch =>{
    // ...anecdote == content, id, votes
    const changedAnecdote1 ={...anecdote, votes: anecdote.votes+1}
    const changedAnecdote = await anecdoteService.update(changedAnecdote1.id,changedAnecdote1)
    dispatch({
      type: 'INCREMENT',
      data: changedAnecdote
    })
  }
}


export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW',
      data:{content:newAnecdote.content,
        id:newAnecdote.id,
        votes:newAnecdote.votes
      } 
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
        const otherRecords=state.filter(record=>record.id !==action.data.id)
        const newState=otherRecords.concat(action.data)
        newState.sort((firstItem, secondItem) =>  secondItem.votes - firstItem.votes)
        return newState

    case 'NEW':
      return [...state, action.data]

    case 'INIT_ANECDOTES':
      return action.data.sort((firstItem, secondItem) =>  secondItem.votes - firstItem.votes)

    default:
      return state
  }
}

export default anecdoteReducer