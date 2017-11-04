import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Touchable from '../Touchable/Touchable.component';
import styles from './OverlayModal.component.style';
import Modal from 'react-native-modal';

class OverlayModal extends React.Component {

  static propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func
  }

  state = {
    visible: false
  }

  componentWillReceiveProps (newProps) {
    this.setState({visible: newProps.showModal});
  }

  hideModal = () => {
    const {closeModal} = this.props;
    // this.setState({visible: false});
    closeModal();
  }

  render () {
    const {closeModal} = this.props;
    const {visible} = this.state;
    return (
      <Modal
        isVisible={visible}>
        <View style={styles.container}>
          <Touchable onPress={closeModal}>
            <Text>Hello!</Text>
          </Touchable>
        </View>
      </Modal>
    );
  }
}

export default OverlayModal;
