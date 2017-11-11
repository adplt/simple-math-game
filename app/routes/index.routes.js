import React from 'react';
import {StackNavigator} from 'react-navigation';
import Boarding from '../pages/Boarding/Boarding.page';
import Level from '../containers/Level.container';
import Game from '../containers/Game.container';
import Example from '../pages/Expample/Example.page';
import LeaderBoard from '../containers/LeaderBoard.container';

export default StackNavigator({
  Boarding: {
    screen: Boarding
  },
  Level: {
    screen: Level
  },
  Game: {
    screen: Game
  },
  Example: {
    screen: Example
  },
  LeaderBoard: {
    screen: LeaderBoard
  }
}, {
  navigationOptions: {
    header: null,
    gesturesEnabled: false,
  }
});
