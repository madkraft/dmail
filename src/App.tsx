import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

interface State {
  count: number
  label: string
}

class App extends Component {
  public state: State = {
    count: 0,
    label: 'true'
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>hello world</h1>
        <h2>Count: {this.state.count}</h2>
        {this.state.count === 9 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
