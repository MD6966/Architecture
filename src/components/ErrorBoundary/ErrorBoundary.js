import React, { Component } from "react";
import Page from "../page/page";
import ErrorPage from "./components/ErrorPage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    // Any side effects can be moved here
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Consider logging error and info to a logging service
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Error info:", info);
  }

  render() {
    return (
      <Page title="Error 404">
        {this.state.hasError ? <ErrorPage /> : this.props.children}
      </Page>
    );
  }
}

export default ErrorBoundary;
