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
    goBack: PropTypes.func
  }

  onPress = (params) => {
    const {navigation} = this.props;
    navigation.navigate('Game', {...navigation.state.params, ...params});
  }

  plus = () => this.onPress({operator: '+'});

  minus = () => this.onPress({operator: '-'});

  multiple = () => this.onPress({operator: '*'});

  divide = () => this.onPress({operator: '/'});

  render () {
    const {goBack} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Choose Option'}
        </Text>
        <Touchable onPress={this.plus} style={styles.menuTouchable}>
          <Text style={styles.instructions}>{'Plus'}</Text>
        </Touchable>
        <Touchable onPress={this.minus} style={styles.menuTouchable}>
          <Text style={styles.instructions}>{'Minus'}</Text>
        </Touchable>
        <Touchable onPress={this.multiple} style={styles.menuTouchable}>
          <Text style={styles.instructions}>{'Multiple'}</Text>
        </Touchable>
        <Touchable onPress={this.divide} style={styles.menuTouchable}>
          <Text style={styles.instructions}>{'Divide'}</Text>
        </Touchable>
        <Touchable onPress={goBack} style={styles.menuTouchable}>
          <Text style={styles.instructions}>{'Back'}</Text>
        </Touchable>
      </View>
    );
  }
}
