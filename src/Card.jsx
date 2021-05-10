import * as React from 'react'
import './Card.css'

export default ({ title, text, isBookmarkActive }) => {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={isBookmarkActive ? 'Bookmark active' : 'Bookmark'} />
    </section>
  )
}
