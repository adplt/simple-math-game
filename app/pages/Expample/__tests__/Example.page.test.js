import React from 'react';
import renderer from 'react-test-renderer';
import Example from '../Example.page';

describe('Example component', () => {
  xit('renders correctly', () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
