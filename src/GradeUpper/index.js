/* @flow */
import React, { Component } from 'react';
import styles from './style.css';
import Container from '../components/Container';

class GradeUpper extends Component {
  state = {
    lat: '',
    lng: '',
  };
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }
  render() {
    return (
      <Container title="VG getter">
        <h1 className={styles.title}> YOU ARE HERE </h1>
        {this.state.lat && this.state.lng &&
          <div className={styles.container}>
            <p>Latitude: {this.state.lat}</p>
            <p>longitude: {this.state.lng}</p>
          </div>
        }
        {!this.state.lat && !this.state.lng &&
          <div className={styles.container}>
            <p> We're using your mobile devce to find your location. </p>
          </div>
        }
      </Container>
    );
  }
}

export default GradeUpper;
