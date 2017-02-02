/* @flow */
import React, { PureComponent } from 'react';
import Container from '../components/Container';
import { Link } from 'react-router';
import Logo from '../components/Logo';
import styles from './style.css';

class Browse extends PureComponent {
  render() {
    return (
      <div>
        <Container hideHead>
          <div className={styles.logoContainer}><Logo /></div>
          <div className={styles.group}>
            <input
              className={styles.input}
              type="email"
              placeholder="email@example.com"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="password"
            />
          </div>
          <Link className={styles.link} to="404">Forgot password?</Link>
          <Link to="recipes">
            <button className={styles.button}>Login</button>
          </Link>
          <Link to="404">
            <button className={styles.altButton}>Login with Facebook</button>
          </Link>
          <Link className={styles.link} to="404">
            Create Account
          </Link>
        </Container>
      </div>
    );
  }
}

export default Browse;
