import * as React from 'react'
import Counter from '../components/Counter'

import { dispatch, State, store$ } from '../rx/counter'

const a = store$.subscribe(state => console.log(state))

const increment = dispatch(() => ({ type: 'INC' }))
const decrement = dispatch(() => ({ type: 'DEC' }))

// todo -- bind the store to a react instance...perhaps with a component & render prop?
const IndexPage = () => (
  <div className="p-4">
    <Counter
      count={2}
      inc={increment}
      dec={decrement}
    />
  </div>
)

export default IndexPage
