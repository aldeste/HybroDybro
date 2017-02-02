import React from 'react';
import ReactDOM from 'react-dom';
import App, {BrowseExotics, BrowseLetters} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<BrowseExotics />, div);
  ReactDOM.render(<BrowseLetters />, div);
});
