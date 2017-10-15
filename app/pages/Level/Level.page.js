import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './Level.page.style';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';

export default class Level extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Game', {score: 0});
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Choose option'}
        </Text>
        <Touchable onPress={this.onPress}>
          <Text style={styles.instructions}>{'Choose operator'}</Text>
        </Touchable>
      </View>
    );
  }
}
