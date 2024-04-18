import React from 'react';

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  errored: Boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      errored: false,
    };
  }

  static getDerivedStateFromError() {
    return { errored: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.warn(info.componentStack);
    console.error(error);
  }

  render() {
    const { props, state } = this;

    if (state.errored) {
      return props.fallback;
    }

    return props.children;
  }
}

export default ErrorBoundary;
