import React from 'react';
import renderer from 'react-test-renderer';
import LeaderBoard from '../LeaderBoard.page';

describe('Leader Board component', () => {
  xit('renders correctly', () => {
    const tree = renderer.create(<LeaderBoard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
