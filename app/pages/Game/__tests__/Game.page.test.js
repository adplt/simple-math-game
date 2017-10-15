import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../Game.page';

describe('Game component', () => {
  xit('renders correctly', () => {
    const tree = renderer.create(<Game />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
