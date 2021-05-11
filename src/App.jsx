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
      <Card text="ich bin ein kleiner Text" title="Titel" />
      <Card
        isBookmarkActive
        text="ich bin anderer ein kleiner Text"
        title="Titel 2"
      />
    </div>
  )
}
