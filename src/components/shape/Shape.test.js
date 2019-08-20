import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders Shape', () => {
    const wrapper = shallow(<Shape
      color="green"
      backgroundColor="orange"
      text="Greetings friends and foe!!!!" />);
    expect(wrapper).toMatchSnapshot();
  });
});
