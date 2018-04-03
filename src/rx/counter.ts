import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { scan } from 'rxjs/operators'

import { createStore, Action } from './createStore'

// action types
const INC = 'INC'
const DEC = 'DEC'
const CLEAR = 'CLEAR'

// state
export type State = {
  count: number
}

const initialState: State = {
  count: 0,
}

// updates
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 }
    case DEC: {
      if (state.count === 0) return state;
      return { count: state.count - 1 }
    }
    case CLEAR: {
      return { count: 0 }
    }
    default:
      return state
  }
}

// action creators
export const increment = () => ({ type: INC })
export const decrement = () => ({ type: DEC })
export const clear = () => ({ type: CLEAR })

// store
export const store = createStore(reducer, initialState)

