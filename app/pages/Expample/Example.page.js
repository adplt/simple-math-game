// import React, {Component} from 'react';
// import {
//   LayoutAnimation,
//   View,
//   TouchableOpacity,
//   Text,
//   Animated
// } from 'react-native';
// import styles from './Example.page.style';
//
// export default class Example extends Component {
//
//   state = {
//     w: new Animated.Value(0),
//     h: new Animated.Value(0),
//     width: 100,
//     height: 100
//   }
//
//   onPress = () => {
//     // Spring
//     // easeInEaseOut
//     LayoutAnimation.easeInEaseOut();
//     this.setState({width: this.state.width + 15, height: this.state.height + 15});
//     // Animated.spring(this.state.w, {toValue: this.state.h}).start();
//     // this.state.w.interpolate({
//     //   inputRange: [0, 0],
//     //   outputRange: [0, 0]
//     // });
//   }
//
//   render () {
//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.box, {width: this.state.width, height: this.state.height}]} />
//         <TouchableOpacity onPress={this.onPress}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>{'Press me !'}</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

import React, {Component} from 'react';
import {
  LayoutAnimation,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './Example.page.style';

export default class AddRemoveExample extends Component {

  state = {
    views: []
  }

  componentWillUpdate = () => {
    LayoutAnimation.easeInEaseOut();
  }

  _onPressAddView = () => {
    this.setState((state) => ({views: [...state.views, {}]}));
  }

  _onPressRemoveView = () => {
    this.setState((state) => ({views: state.views.slice(0, -1)}));
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressAddView}>
          <View style={styles.button}>
            <Text>Add view</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressRemoveView}>
          <View style={styles.button}>
            <Text>Remove view</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {
            this.state.views.map((view, i) =>
              <View key={i} style={styles.view}>
                <Text>{i}</Text>
              </View>)
          }
        </View>
      </View>
    );
  }
}

// export default class CrossFadeExample extends Component {
//
//   state = {
//     toggled: false,
//   }
//
//   _onPressToggle = () => {
//     LayoutAnimation.easeInEaseOut();
//     this.setState((state) => ({toggled: !state.toggled}));
//   }
//
//   render () {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this._onPressToggle}>
//           <View style={styles.button}>
//             <Text>Toggle</Text>
//           </View>
//         </TouchableOpacity>
//         <View style={styles.viewContainer}>
//           {
//             this.state.toggled ?
//               <View style={styles.greenSquare}>
//                 <Text>Green square</Text>
//               </View> :
//               <View style={styles.blueSquare}>
//                 <Text>Blue square</Text>
//               </View>
//           }
//         </View>
//       </View>
//     );
//   }
// }

// exports.title = 'Layout Animation';
// exports.description = 'Layout animation';
// exports.examples = [{
//   title: 'Add and remove views',
//   render(): ReactElement<any> {
//     return <AddRemoveExample />;
//   },
// }, {
//   title: 'Cross fade views',
//   render(): ReactElement<any> {
//     return <CrossFadeExample />;
//   },
// }];
