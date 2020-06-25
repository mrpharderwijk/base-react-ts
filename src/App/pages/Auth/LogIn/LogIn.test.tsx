import React from 'react';
import { shallow } from 'enzyme';
import LogIn from './LogIn';

describe('<LogIn />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LogIn />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
