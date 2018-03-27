import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { scan } from 'rxjs/operators'

const INC = 'INC'
const DEC = 'DEC'

type Action = {
  type: string
  count?: number
}

type ActionCreator = (...args: any[]) => Action

export type State = {
  count: number
}

export const initialState: State = {
  count: 0,
}

export const action$ = new Subject()

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

export const dispatch = (fn: ActionCreator) => (...args: any[]) =>
  action$.next(fn(...args))
export const store$ = action$.pipe(scan(reducer, initialState))
