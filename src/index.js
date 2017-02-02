import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';

const renderApp = Component => ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('root'),
);

if (process.env !== 'production') {
  window.Perf = require('react-addons-perf');
}

renderApp(App);
// Hot Module Replacement API.
// This will render components on component updates and edits.
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
