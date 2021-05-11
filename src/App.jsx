import * as React from 'react'
import Card from './Card'
import cardData from './questen-data.json'

export default () => {
  return (
    <div>
      {cardData.map(element => {
        const { question, correct_answer } = element
        return <Card title={question} text={correct_answer}></Card>
      })}
    </div>
  )
}
