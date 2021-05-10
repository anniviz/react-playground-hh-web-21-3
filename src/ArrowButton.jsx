import * as React from 'react'
import './ArrowButton.css'

export default ({ isActive, direction }) => {
  return (
    <button className={isActive ? 'ArrowButton active' : 'ArrowButton'}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}
