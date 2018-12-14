import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // Arrange
    const wrapper = shallow( <Card addCardCallback={ () => {} } />);

    // Assert
    expect(wrapper).toMatchSnapshot();
  });
});
