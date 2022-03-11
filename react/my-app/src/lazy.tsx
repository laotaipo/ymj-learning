import React, { Suspense } from 'react'

const OtherComponent = React.lazy(() => import('./combine'))
const AnotherComponent = React.lazy(() => import('./waterrrr'))

function lazyC() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  )
}

export default lazyC
