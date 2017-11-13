import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View
} from 'react-native';
import styles from './LeaderBoard.page.style';
import Touchable from '../../components/Touchable/Touchable.component';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import OverlaySpinner from '../../components/OverlaySpinner/OverlaySpinner.component';

export default class LeaderBoard extends Component {

  static propTypes = {
    goBack: PropTypes.func,
    leaderBoard: PropTypes.array,
    showSpinner: PropTypes.bool,
  }

  render () {
    const {goBack, leaderBoard = [], showSpinner} = this.props;
    return (
      <ImageBackground
        source={require('../../image/background.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.header}>
            {'Leader Board'}
          </Text>
          <ScrollView>
            {
              leaderBoard.map((data, i) => (
                <Touchable key={i} onPress={noop} style={styles.row}>
                  <Text style={styles.content}>
                    {result(data, 'name', '')}
                  </Text>
                  <Text style={styles.content}>
                    {result(data, 'country', '')}
                  </Text>
                  <Text style={styles.content}>
                    {result(data, 'score', '')}
                  </Text>
                </Touchable>
              ))
            }
          </ScrollView>
          <Touchable onPress={goBack}>
            <Text style={styles.footer}>
              {'Back'}
            </Text>
          </Touchable>
        </View>
        <OverlaySpinner showSpinner={showSpinner} />
      </ImageBackground>
    );
  }
}
