import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { scan } from 'rxjs/operators'

import { createStoreAndDispatch } from './createStore'
// todo -- separate the generic from the specific
export type Action = {
  type: string
  count?: number
}

export type ActionCreator = (...args: any[]) => Action

// export const action$ = new Subject()

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

// todo -- create a more abstracted method for generating the store.
export const { store$, dispatch } = createStoreAndDispatch(reducer, initialState)


