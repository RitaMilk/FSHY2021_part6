import React from 'react'
import {voteOf } from '../reducers/anecdoteReducer'
import {useSelector, useDispatch } from 'react-redux'
import { setNotification,rmNotification  } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id,content) => {
    console.log('vote', id)
    dispatch(voteOf(id))
    dispatch(setNotification(content))
    setTimeout(() => {
      dispatch(rmNotification(content))
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
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )
    )
}

export default AnecdoteList