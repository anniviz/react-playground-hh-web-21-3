import * as React from 'react'
import ArrowButton from './ArrowButton'
import './PageBrowser.css'

export default ({ currentPage, totalPages }) => {
  return (
    <div className="PageBrowser">
      <ArrowButton isActive={currentPage !== 1} direction="left" />
      <span>
        {currentPage}/{totalPages}
      </span>
      <ArrowButton isActive={currentPage !== totalPages} direction="rigth" />
    </div>
  )
}
