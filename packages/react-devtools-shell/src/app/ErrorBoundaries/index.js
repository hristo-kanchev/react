import * as React from 'react';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h4
          style={{
            backgroundColor: 'red',
            padding: '20px',
          }}>
          Something went wrong.
        </h4>
      );
    }

    return this.props.children;
  }
}

function TriggerError() {
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error('Something went wrong');
  }

  return (<button type="button" onClick={() => setShouldError(!shouldError)}>TriggerError</button>)
}

export default function ErrorBoundaries() {
  return (
    <section>
      <h1>Error Boundaries</h1>
      <ErrorBoundary>
        <TriggerError />
      </ErrorBoundary>
    </section>
  );
}
