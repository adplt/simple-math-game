import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
} from 'react-native';
import styles from './Boarding.page.style';
import SplashScreen from 'react-native-splash-screen';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

export default class Boarding extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    getLeaderBoard: PropTypes.func,
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

  render () {
    const {getLeaderBoard = noop} = this.props;
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
          <Touchable onPress={getLeaderBoard} style={styles.menuTouchable}>
            <Text style={styles.menu}>
              {'Leader Board'}
            </Text>
          </Touchable>
        </View>
      </ImageBackground>
    );
  }
}
