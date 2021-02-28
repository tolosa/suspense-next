import { Suspense } from 'react'

import Data from 'components/Data'

const Index = () => (
  <>
    <h1>Suspense example</h1>
    <Suspense fallback={<p>Loading...</p>}>
      <Data />
    </Suspense>
  </>
)

export default Index
