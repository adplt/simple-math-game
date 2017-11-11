import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  Alert
} from 'react-native';
import styles from './Boarding.page.style';
import SplashScreen from 'react-native-splash-screen';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

export default class Boarding extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  componentDidMount () {
    SplashScreen.hide();
  }

  onPress = (params) => {
    const {navigation} = this.props;
    navigation.navigate('Level', params);
  }

  goToCounting = () => this.onPress({menu: 'count'});

  goToChoosing = () => this.onPress({menu: 'choose'});

  onPressLeaderBoard = (params) => {
    const {navigation} = this.props;
    return typeof atob === 'undefined' ? navigation.navigate('LeaderBoard', params) :
      Alert.alert('Warning', 'Please to disabled React Native Debugger', [{
        text: 'Ok',
        onPress: noop
      }]);
  }

  render () {
    return (
      <ImageBackground
        source={require('../../image/background.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {'Mathematic'}
          </Text>
          <Touchable onPress={this.goToCounting} style={styles.menuTouchable}>
            <Text style={styles.menu}>
              {'Counting'}
            </Text>
          </Touchable>
          <Touchable onPress={this.goToChoosing} style={styles.menuTouchable}>
            <Text style={styles.menu}>
              {'Choosing'}
            </Text>
          </Touchable>
          <Touchable onPress={this.onPressLeaderBoard} style={styles.menuTouchable}>
            <Text style={styles.menu}>
              {'Leader Board'}
            </Text>
          </Touchable>
        </View>
      </ImageBackground>
    );
  }
}
