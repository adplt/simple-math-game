import React, {Component} from 'react';
import {
  // Platform,
  Text,
  View,
} from 'react-native';
import styles from './boarding.page.style';
import SplashScreen from 'react-native-splash-screen';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class Boarding extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  componentDidMount () {
    SplashScreen.hide();
  }

  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Level');
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Mathematic'}
        </Text>
        <Touchable onPress={this.onPress} style={{padding: 20}}>
          <Text style={styles.instructions}>
            {'Start'}
          </Text>
        </Touchable>
      </View>
    );
  }
}
