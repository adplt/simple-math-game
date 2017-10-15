import React from 'react';
import renderer from 'react-test-renderer';
import Level from '../Level.page';

describe('Level component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Level />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
