import React from 'react';
import renderer from 'react-test-renderer';
import OverlayModal from '../OverlayModal.component';

describe('OverlayModal component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<OverlayModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
