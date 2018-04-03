import * as React from 'react'
import {
  Dispatcher,
  ActionCreator,
  dispatch,
  State as RxState,
  store$,
} from '../../rx/counter'

type State = RxState | { dispatchers?: { [fn: string]: Dispatcher } }
type Props = {
  actions?: {
    [fnName: string]: ActionCreator
  }
  children: (state: State) => React.ReactNode
}


class Subscriber extends React.Component<Props, State> {
  state = { count: 0, dispatchers: {} }

  static defaultProps = {
    actions: {},
  }

  componentDidMount() {
    // todo -- have a fn mapper to allow you to designate which fns are bound to the dispatcher.
    const actionsArr = Object.entries(this.props.actions)
    const dispatchers = actionsArr.map(([name, action]) => ({
      [name]: dispatch(action),
    }))

    store$.subscribe(state => this.setState({ ...state, dispatchers }))
  }

  render() {
    const { dispatchers, ...state } = this.state;
    return this.props.children(state)
  }
}

export default Subscriber
