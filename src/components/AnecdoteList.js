import React, {useEffect} from 'react'
//import React from 'react'
import {voteOf } from '../reducers/anecdoteReducer'
import {useSelector, useDispatch } from 'react-redux'
import { setNotification,rmNotification  } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if(state.filter.content==='')
      {
      return state.anecdotes
    }
    else {
      const anecdotesFiltered=state.anecdotes.filter(anecdote =>{
        return anecdote.content.toLowerCase().includes(state.filter.content.toLowerCase())
      })
      //console.log('anecdotesFiltered=',anecdotesFiltered)
      return anecdotesFiltered//state.anecdotes
      }
  })

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    //console.log('vote', id)
    dispatch(voteOf(anecdote))
    dispatch(setNotification(anecdote.content))
    setTimeout(() => {
      dispatch(rmNotification(anecdote.content))
    }, 5000)

  }

    return(
        anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )
    )
}

export default AnecdoteList