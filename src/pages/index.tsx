import * as React from 'react'
import Counter from '../components/Counter'
import Subscriber from '../components/Subscriber'

import { State, store } from '../rx/counter'

// const increment = dispatch(() => ({ type: 'INC' }))
// const decrement = dispatch(() => ({ type: 'DEC' }))

const IndexPage = () => (
  <div className="p-4">
    <Subscriber store={store} actions={{
      increment: () => ({ type: 'INC' }),
      decrement: () => ({ type: 'DEC' })
    }}>
      {({ count, increment, decrement }) => <Counter count={count} inc={increment} dec={decrement} />}
    </Subscriber>
  </div>
)

export default IndexPage
