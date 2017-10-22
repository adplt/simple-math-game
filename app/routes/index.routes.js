import React from 'react';
import {StackNavigator} from 'react-navigation';
import Boarding from '../pages/Boarding/boarding.page';
import Level from '../containers/Level.container';
import Game from '../containers/Game.container';

export default StackNavigator({
  Boarding: {
    screen: Boarding
  },
  Level: {
    screen: Level
  },
  Game: {
    screen: Game
  }
}, {
  navigationOptions: {
    header: null,
    gesturesEnabled: false,
  }
});
