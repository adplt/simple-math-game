import React from 'react';
import renderer from 'react-test-renderer';
import OverlayModal from '../OverlayModal.component';

describe('OverlayModal component', () => {
  it('renders correctly', () => {
    const data = {
      score: 0,
      highScore: 12
    };
    const tree = renderer.create(<OverlayModal data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
