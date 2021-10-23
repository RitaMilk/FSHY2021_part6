import React from 'react'
//import anecdoteService from '../../services/anecdotes'
import {createAnecdote } from '../reducers/anecdoteReducer'
//import {useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()

  const addAnecdote = async(event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //const newAnecdote = await anecdoteService.createNew(content)
    //console.log("newAnecdote,created=",newAnecdote)
    //dispatch(createAnecdote(content))
    props.createAnecdote(content)
    //dispatch(createAnecdote(newAnecdote))
        
    //dispatch(setNotification(content,5))
    props.setNotification(content,5)
    /* setTimeout(() => {
      dispatch(rmNotification(content))
    }, 5000) */
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



export default connect(
  null, 
  { createAnecdote,setNotification }
)(AnecdoteForm)
//export default AnecdoteForm