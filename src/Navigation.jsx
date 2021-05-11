import * as React from 'react'
import './Navigation.css'

export default ({ navItems }) => {
  return (
    <nav className="Navigation">
      {navItems.map(navItem => (
        <button
          key={navItem.title}
          className={
            navItem.isActive
              ? 'Navigation__Item Navigation__Item--active'
              : 'Navigation__Item'
          }
        >
          {navItem.title}
        </button>
      ))}
    </nav>
  )
}
