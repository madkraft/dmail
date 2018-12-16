import React, { Component } from 'react'

interface State {
  isError: boolean
}

export default class DefaultErrorBoundary extends Component<{}, State> {
  public static getDerivedStateFromError(): State {
    return { isError: true }
  }

  public state = {
    isError: false
  }

  public render(): JSX.Element | {} | null | undefined {
    const { isError } = this.state
    const { children } = this.props

    return isError ? <div>Something went wrong</div> : children
  }
}
