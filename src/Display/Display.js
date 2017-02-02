/* @flow */
import React, { Component } from 'react';
import styles from './style.css';
import Container from '../components/Container';

class Display extends Component {
  render() {
    const display = this.props.data.recipes.find(e => e.id === Number(this.props.display));
    return (
      <div>
        <Container title={display.name}>
          <div className={styles.container}>
            <h1 className={styles.display}>
              {display.name}
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          </Container>
      </div>
    );
  }
}

export default Display;
