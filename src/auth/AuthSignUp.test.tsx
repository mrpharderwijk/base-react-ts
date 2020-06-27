import React from 'react';
import { shallow } from 'enzyme';
import AuthSignUp from './AuthSignUp';

describe('<AuthSignUp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AuthSignUp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
