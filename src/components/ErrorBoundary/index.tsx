import React, { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    const { state, props } = this;
    const { hasError } = state;
    const { children } = props;

    if (hasError) {
      return (
        <div>
          <p>Seems like an error occurred!</p>
        </div>
      );
    }

    return children;
  }
}
