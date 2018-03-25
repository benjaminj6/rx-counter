import * as React from 'react'
import Counter from '../components/Counter'

const IndexPage = () => (
  <div className="p-4">
    <Counter
      count={2}
      inc={() => console.log('inc')}
      dec={() => console.log('dec')}
    />
  </div>
)

export default IndexPage
