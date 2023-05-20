import React, { Suspense, type ErrorInfo, type ReactNode } from 'react'

import { PageError } from 'widgets/page-error'

interface IErrorBoundaryProps {
  children: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack)
  }

  render(): ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
