/* @flow */
import React, { PureComponent } from 'react';
import Tabs from '../Tabs';
import Header from '../Header';
import styles from './style.css';

class Container extends PureComponent {
  render() {
    return (
      <div>
        {!this.props.hideHead && <Header title={this.props.title} />}
        <div className={styles.container}>
          {this.props.children}
        </div>
        <Tabs />
      </div>
    );
  }
}

export default Container;
