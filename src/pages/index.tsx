import * as React from 'react'
import Counter from '../components/Counter'
import Subscriber from '../components/Subscriber'

import { State, store, increment, decrement, clear } from '../rx/counter'
// const increment = dispatch(() => ({ type: 'INC' }))
// const decrement = dispatch(() => ({ type: 'DEC' }))

const IndexPage = () => (
  <div className="p-4">
    <Subscriber
      store={store}
      actions={{ increment, decrement, clear }}
    >
      {({ count, increment, decrement, clear }) => (
        <Counter count={count} inc={increment} dec={decrement} clear={clear} />
      )}
    </Subscriber>
  </div>
)

export default IndexPage
