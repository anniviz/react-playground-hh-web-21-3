import * as React from 'react'
import Pagination from './Pagination'
import Button from './Button'
import Card from './Card'

export default () => {
  return (
    <div>
      <Button isActive>Active</Button>
      <Button>not Active</Button>
      <Pagination />
      <Card
        isBookmarkActive={false}
        text="ich binn ein anderer kleiner Text"
        title="Titel"
      />
      <Card isBookmarkActive text="ich binn ein kleiner Text" title="Titel" />
    </div>
  )
}
