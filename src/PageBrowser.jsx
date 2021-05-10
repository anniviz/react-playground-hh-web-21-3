import * as React from 'react'
import ArrowButton from './ArrowButton'
import './PageBrowser.css'

export default ({ children, isActiveLeft, isActiveRight }) => {
  return (
    <div className="PageBrowser">
      <ArrowButton isActive={isActiveLeft} direction="left" />
      <span>{children}</span>
      <ArrowButton isActive={isActiveRight} direction="rigth" />
    </div>
  )
}
