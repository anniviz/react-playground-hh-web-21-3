import * as React from 'react'
import Pagination from './Pagination'
import Button from './Button'

export default () => {
  return (
    <div>
      <Button isActive>Active</Button>
      <Button>not Active</Button>
      <Pagination />
    </div>
  )
}
