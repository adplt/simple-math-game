import React from 'react';
import {StackNavigator} from 'react-navigation';
import Boarding from '../pages/Boarding/boarding.page';

export default StackNavigator({
  Boarding: {
    screen: Boarding
  }
}, {
  navigationOptions: {
    header: null,
    gesturesEnabled: false,
  }
});
