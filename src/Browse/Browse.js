/* @flow */
import React, { PureComponent } from 'react';
import ListItem from '../components/ListItem';
import Container from '../components/Container';
import AsyncImg from '../components/AsyncImg';
import styles from './style.css';

class Browse extends PureComponent {
  render() {
    return (
      <div>
        <Container title="Browse">
          {this.props.list.recipes.map(e => (
            <ListItem
              key={e.id}
              title={e.name}
              linkTo={`/view/${e.id}`}
              media={
                <div className={styles.mediaBox}>
                  <AsyncImg className={styles.media} src={import(`../media/svg/${this.props.list.countries[e.from]
                    .iso2.toLocaleLowerCase()}.svg`)} alt="ad" />
                </div>
              }
              meta={
                <div className={styles.meta}>
                  <p>{e.ease}</p>
                  <p>★★★★☆</p>
                </div>
              }>
            </ListItem>
          ))}
        </Container>
      </div>
    );
  }
}

export default Browse;
