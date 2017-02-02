import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Display params={{ display: 'a' }} />, div);
});

it('renders buttons', () => {
  const component = shallow(<Display params={{ display: 'a' }} />)
  component.find('button').map(e => e.simulate('click'));
});
