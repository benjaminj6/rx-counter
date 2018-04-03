import * as React from 'react'
// import { Dispatcher } from '../../rx/createStore'
// todo -- can this be abstracted so that it isn't connected to the `counter` store?
import { ActionCreator, Dispatcher, Store } from '../../rx/createStore'
import {
  // dispatch,
  State as RxState,
} from '../../rx/counter'

type State = { [fn: string]: any | Dispatcher }
type Props = {
  store: Store
  actions?: {
    [fnName: string]: ActionCreator
  }
  children: (state: State) => React.ReactNode
}

class Subscriber extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.dispatchers = this.getDispatchers(props);

    this.state = {}
  }

  dispatchers = {}

  static defaultProps = {
    actions: {},
  }

  getDispatchers = (props = this.props) => {
    const { store } = props
    const actionsArr = Object.entries(this.props.actions)
    const dispatchers = actionsArr.reduce(
      (acc: { [x: string]: any }, [name, action]) => {
        acc[name] = store.dispatch(action)
        return acc
      },
      {}
    )

    return dispatchers;
  }

  componentDidMount() {
    const { store } = this.props

    // todo -- figure out how to not cause a rerender here
    store.state$.subscribe(state => {
      this.setState(state)
    })
  }

  render() {
    console.log('should only render once')
    return this.props.children({...this.state, ...this.dispatchers})
  }
}

export default Subscriber
