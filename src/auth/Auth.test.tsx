import React from 'react';
import { shallow } from 'enzyme';
import Auth from './Auth';

describe('<Auth />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Auth />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
