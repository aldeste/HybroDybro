import React, { Component, PropTypes } from 'react';
import style from './style.css';

class Logo extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.2 114.9" className={style.logo}>
          <path d="M0 25.4C0 14.5 6.9 5.9 16.4 1.9c10.1-4.1 19.7-1.6 28 7.2 6.7 7.1 9 17.6 3.8 26.3-5.7 9.4-12.8 17.9-19.4 26.6-1.8 2.4-4.6 2.4-6.4 0C15.6 53 0 33.5 0 25.4zm56.1 49.1c3.2 0 6.5.2 9.7.6 4.9.8 6 3.8 3.2 7.9-1.5 2.2-3.3 4.2-4.9 6.3-4.4 5.5-4.7 10.4-.7 14.7 3.8 4.1 11.2 5 16.1 1.8 1-.7 1.8-1.8 2.8-2.3.2-.1.4-.2.6-.2.4-.1.9-.2 1.3-.2 2-.3 3.7 1.4 3.3 3.4-.1.6-.3 1.2-.6 1.6-5.1 7.2-16.8 9.3-24.2 3.8-4.7-3.5-7.9-3.6-12.7-.2-8.1 5.7-17.4 4.1-23.7-3.2-.3-.3-.5-.7-.6-1.1-.8-2.4 1.3-4.7 3.7-3.8.4.1.7.3 1 .5 3.4 3.1 8 4.4 12.5 3.5 8.2-1.4 12.5-11.4 6.5-17-2.4-2.4-4.4-5-6.1-7.9-2.3-3.6-1-6.6 3.2-7.3 3.2-.7 6.4-.9 9.6-.9z"/>
          <path className={style.background} d="M25 14.5h-.3c-5.8.2-10.3 5-10.2 10.7 0 6.1 4.5 10.6 10.3 10.5 5.5-.1 10.3-5.1 10.3-10.8.1-5.6-4.4-10.3-10.1-10.4z"/>
          <path className={style.eye} d="M95.1 25.3c-.2 4.5-3.9 8-8.4 8-4.5-.2-8-3.9-7.9-8.5.3-4.3 3.8-7.7 8.1-7.9 4.3.1 8.3 4.2 8.2 8.4z"/>
        </svg>
      </div>
    );
  }
}

export default Logo;
