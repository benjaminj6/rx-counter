import * as React from 'react'
import Button from '../Button'

import { State } from '../../rx/counter'

type Props = {
  count: State['count']
  inc: () => void
  dec: () => void
  clear?: () => void
}

const Counter = (props: Props) => (
  <div>
    <h1 className="mb-4">{props.count}</h1>

    <Button onClick={props.inc} bg="blue">
      +
    </Button>
    <Button onClick={props.dec} bg="green" className="ml-4">
      -
    </Button>

    {props.clear && (
      <Button onClick={props.clear} bg="red" className="ml-4">
        CLEAR
      </Button>
    )}
  </div>
)

export default Counter
