import * as React from 'react'
import PageBrowser from './PageBrowser'

export default () => {
  return (
    <section>
      <PageBrowser isActiveLeft={false} isActiveRight={true}>
        1/34
      </PageBrowser>
      <PageBrowser isActiveLeft={true} isActiveRight={true}>
        2/34
      </PageBrowser>
      <PageBrowser isActiveLeft={true} isActiveRight={false}>
        34/34
      </PageBrowser>
    </section>
  )
}
