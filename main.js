import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store/store'

import Counter from './component/Counter'

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
