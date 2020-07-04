import React from 'react';
import { shallow } from 'enzyme';
import AuthLogIn from './AuthLogIn';

describe('<AuthLogIn />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AuthLogIn />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
