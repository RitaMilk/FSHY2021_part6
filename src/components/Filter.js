import React from 'react'
//import {useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { setFilter,resetFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    //const dispatch=useDispatch()

    const handleChange = (event) => {
        // input-field value is in variable event.target.value
        event.preventDefault()
        const content = event.target.value
        //event.target.value = ''
        //console.log("inputfilter=",content)
        if (content ==='') {
          //dispatch(resetFilter(content))
          props.resetFilter(content)
        } else {
          //dispatch(setFilter(content))
          props.setFilter(content)
        }
    }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input type='text' onChange={handleChange} />
      {/* <Filter value={newCriteria} handleChange={handleCriteriaChange}/>  */}
    </div>
  )
}
export default connect(
  null, 
  { setFilter,resetFilter }
)(Filter)
//export default Filter