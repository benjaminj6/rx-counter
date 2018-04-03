import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { scan } from 'rxjs/operators'

export type Action = {
  type: string,
  payload?: any,
}

export type ActionCreator = (...args: any[]) => Action
export type Dispatcher = (...args: any[]) => void

export type Reducer = (state: {}, action: Action) => {}
export type Store = {
  initialState: any,
  state$: Observable<any>,
  dispatch: (fn: ActionCreator) => Dispatcher,
}

export const createStore = (reducer: Reducer, initialState: any): Store => {
  const action$ = new Subject()

  return {
    initialState,
    state$: action$.pipe(scan(reducer, initialState)),
    dispatch: (fn) => (...args) =>
      action$.next(fn(...args)),
  }
}
