import React from 'react'
//import anecdoteService from '../../services/anecdotes'
import {createAnecdote } from '../reducers/anecdoteReducer'
import {useDispatch } from 'react-redux'
import { setNotification,rmNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async(event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    console.log("newAnecdote,created=",newAnecdote)
    dispatch(createAnecdote(newAnecdote))
        
    dispatch(setNotification(content))
    setTimeout(() => {
      dispatch(rmNotification(content))
    }, 5000)
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type='submit'>create</button>
      </form>
      </div>
  )
}

export default AnecdoteForm