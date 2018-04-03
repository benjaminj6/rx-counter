import { BehaviorSubject } from 'rxjs/BehaviorSubject'
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
  state$: Observable<any>,
  dispatch: (fn: ActionCreator) => Dispatcher,
}

export const createStore = (reducer: Reducer, initialState: any): Store => {
  const action$ = new BehaviorSubject(initialState)

  return {
    state$: action$.pipe(scan(reducer, initialState)),
    dispatch: (fn) => (...args) =>
      action$.next(fn(...args)),
  }
}
