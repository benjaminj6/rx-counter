import * as React from 'react'
import Counter from '../components/Counter'
import Subscriber from '../components/Subscriber'

import { dispatch, State, store$ } from '../rx/counter'

const increment = dispatch(() => ({ type: 'INC' }))
const decrement = dispatch(() => ({ type: 'DEC' }))

// todo -- bind the store to a react instance...perhaps with a component & render prop?
const IndexPage = () => (
  <div className="p-4">
    <Subscriber>
      {({ count }) => <Counter count={count} inc={increment} dec={decrement} />}
    </Subscriber>
  </div>
)

export default IndexPage
