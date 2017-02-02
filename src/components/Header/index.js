import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';

class Header extends Component {
  render() {
    return <nav className={styles.header}>
      <p onClick={browserHistory.goBack} className={styles.backButton}>
        {`<`}
      </p>
      <p className={styles.title}>{this.props.title}</p>
    </nav>;
  }
}

export default Header;
