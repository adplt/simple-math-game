import React from 'react';
import {StackNavigator} from 'react-navigation';
import Boarding from '../pages/Boarding/boarding.page';
import Level from '../pages/Level/Level.page';
import Game from '../pages/Game/Game.page';

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
