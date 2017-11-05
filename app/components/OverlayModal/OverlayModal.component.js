import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Touchable from '../Touchable/Touchable.component';
import styles from './OverlayModal.component.style';
import Modal from 'react-native-modal';

class OverlayModal extends React.Component {

  static propTypes = {
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,
    data: PropTypes.object,
  }

  state = {
    visible: false,
  }

  componentWillReceiveProps (newProps) {
    const {showModal} = newProps;
    this.setState({visible: showModal});
  }

  hideModal = () => {
    const {closeModal} = this.props;
    closeModal();
  }

  render () {
    const {closeModal, data} = this.props;
    const {visible} = this.state;
    return (
      <Modal
        isVisible={visible}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{'Time\'s Up'}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.halfWidthRight}>{'Time: '}</Text>
              <Text style={styles.halfWidthLeft}>{'60'}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.halfWidthRight}>{'Score: '}</Text>
              <Text style={styles.halfWidthLeft}>{data.score}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.halfWidthRight}>{'High Score: '}</Text>
              <Text style={styles.halfWidthLeft}>{data.highScore}</Text>
            </View>
          </View>
          <Touchable onPress={closeModal}>
            <Text style={styles.close}>{'Close'}</Text>
          </Touchable>
        </View>
      </Modal>
    );
  }
}

export default OverlayModal;
