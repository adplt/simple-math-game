import React from 'react';
import renderer from 'react-test-renderer';
import Boarding from '../boarding.page';

describe('ScrollableViewOverlay component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Boarding />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
