import React, { Component } from 'react'
import spinner from './Spinner-1s-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='spin'>
        <img src={spinner} alt="spinner" style={{height:'70px', width:'70px'}}/>
      </div>
    )
  }
}

export default Spinner
