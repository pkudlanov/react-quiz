import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders ColorSelector', () => {
    const wrapper = shallow(<ColorSelector
      color="green"
      backgroundColor="orange"
      handleColorChange={() => { }}
      handleBackgroundColorChange={() => { }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
