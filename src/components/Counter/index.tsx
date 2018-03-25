import * as React from 'react'
import Button from '../Button'

import { State } from '../../rx/counter'
import { Callback } from '../../rx/types'

type Props = {
  count: State['count'],
  inc: Callback,
  dec: Callback,
}

const Counter = (props: Props) => (
  <div>
    <h1>{props.count}</h1>

    <Button onClick={props.inc} bg="blue">+</Button>
    <Button onClick={props.dec} bg="red" className="m-4">-</Button>
  </div>
)

export default Counter
