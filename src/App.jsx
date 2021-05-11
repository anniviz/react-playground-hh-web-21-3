import * as React from 'react'
import Card from './Card'
import Navigation from './Navigation'
import cardData from './questen-data.json'
import { v4 as uuidv4 } from 'uuid'

export default () => {
  const cardDataWithIDs = cardData.map(data => ({
    ...data,
    id: uuidv4(),
  }))

  const navItems = [
    { title: 'Home', isActive: true },
    { title: 'About' },
    { title: 'Imprint' },
  ]
  return (
    <div>
      <Navigation navItems={navItems} />
      {cardDataWithIDs.map(element => {
        const {
          id,
          question,
          correct_answer,
          incorrect_answers,
          isAnswerHidden,
          isBookmarkActive,
        } = element
        return (
          <Card
            key={id}
            title={question}
            text={correct_answer}
            isTextHidden={isAnswerHidden}
            tags={incorrect_answers}
            isBookmarkActive={isBookmarkActive}
          ></Card>
        )
      })}
    </div>
  )
}
