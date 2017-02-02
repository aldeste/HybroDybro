/* @flow */
import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

class ListItem extends PureComponent {
  static propTypes = { title: PropTypes.string.isRequired };
  render() {
    return (
      <div className={styles.item}>
        <Link to={this.props.linkTo} className={styles.link}>
          {this.props.media}
          <div className={styles.itemInfo}>
            <h1 className={styles.title}>{this.props.title}</h1>
            {this.props.meta}
          </div>
          {this.props.children}
        </Link>
      </div>
    );
  }
}

export default ListItem;
