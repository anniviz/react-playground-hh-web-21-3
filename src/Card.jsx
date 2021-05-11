import * as React from 'react'
import './Card.css'

export default ({ title, text, isBookmarkActive, isTextHidden }) => {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <p className={isTextHidden ? 'Card__text hidden' : 'Card__text'}>
        {text}
      </p>
      <button
        className={
          isBookmarkActive ? 'Card__bookmark active' : 'Card__bookmark'
        }
      />
    </section>
  )
}
