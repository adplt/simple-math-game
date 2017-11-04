import React, {Component} from 'react';
import {
  Animated,
  Text,
} from 'react-native';
import styles from './RenderAnswer.component.style';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';

export default class RenderAnswer extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.number,
    opacity: PropTypes.object
  }

  render () {
    const {disabled, value, onPress} = this.props;
    return (
      <Touchable
        style={styles.halfWidth}
        onPress={onPress(value)}
        disabled={disabled}>
        <Animated.View style={styles.welcome}>
          <Text style={styles.answer}>
            {value}
          </Text>
        </Animated.View>
      </Touchable>
    );
  }
}
