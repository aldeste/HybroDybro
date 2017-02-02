/* @flow */
import React, { Component } from 'react';

const AsyncComp = promiseProp =>
  WrappedCompnent => class Asynced extends Component {
    state = { loading: true, error: false };

    componentDidMount() {
      this.props[promiseProp].then(
        resolve => this.setState({ loading: false, resolve }),
        error => this.setState({ loading: false, error }),
      );
    }

    render() {
      const newProps = { ...this.props, [promiseProp]: this.state.resolve };

      if (this.state.loading) return <p>loading</p>;
      if (this.state.error) return <p>error</p>;
      return <WrappedCompnent {...newProps} />;
    }
  };

export default AsyncComp;
