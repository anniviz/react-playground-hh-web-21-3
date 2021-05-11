import * as React from 'react'
import './Card.css'

export default ({ title, text, isBookmarkActive, isTextHidden, tags }) => {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <p className={isTextHidden ? 'Card__text hidden' : 'Card__text'}>
        {text}
      </p>
      <ul className="Card__tags">{renderTags(tags)}</ul>
      <button
        className={
          isBookmarkActive ? 'Card__bookmark active' : 'Card__bookmark'
        }
      />
    </section>
  )

  function renderTags(tags) {
    return tags.map(tag => (
      <li key={tag} className="Card__tag">
        {tag}
      </li>
    ))
  }
}
