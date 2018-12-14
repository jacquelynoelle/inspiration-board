import React from 'react';
import NewCardForm from '../NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // Arrange
    const wrapper = shallow( <NewCardForm addCardCallback={ () => {} } />);

    // Assert
    expect(wrapper).toMatchSnapshot();
  });
});
