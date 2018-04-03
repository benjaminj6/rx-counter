import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { scan } from 'rxjs/operators'

import { createStore, Action } from './createStore'

export type State = {
  count: number
}

export const initialState: State = {
  count: 0,
}

const INC = 'INC'
const DEC = 'DEC'

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 }
    case DEC: {
      if (state.count === 0) return state;
      return { count: state.count - 1 }
    }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState)
