import { Component, type ErrorInfo, type ReactNode } from 'react';

/**
 * Last-resort guard. A render error should never leave a family staring at a
 * blank page; records are already in localStorage, so a reload usually recovers.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Texas Home Academy render error', error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="main" style={{ margin: '0 auto', padding: '40px 20px' }}>
        <div className="card">
          <h1>Something went wrong on this page</h1>
          <p className="small">
            Your records are stored in this browser and were not deleted. Reloading usually clears
            the problem. If it keeps happening, export a backup from Settings before clearing
            anything.
          </p>
          <pre className="tiny" style={{ whiteSpace: 'pre-wrap', color: '#9b2c2c' }}>
            {this.state.error.message}
          </pre>
          <div className="btn-row">
            <button className="btn" onClick={() => window.location.reload()}>
              Reload the app
            </button>
            <a className="btn ghost" href="#/settings" onClick={() => this.setState({ error: null })}>
              Try Settings
            </a>
          </div>
        </div>
      </div>
    );
  }
}
