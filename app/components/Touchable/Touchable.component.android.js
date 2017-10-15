import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback, View, Platform} from 'react-native';
import noop from 'lodash/noop';

class Touchable extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node,
    highlightColor: PropTypes.string
  }

  state = {
    isCalled: false,
    timer: 0
  }

  componentWillUnmount () {
    clearTimeout(this.state.timer);
  }

  callOnceInInterval = (functionTobeCalled, interval = 600) => (...args) => {
    if (!this.state.isCalled) {
      this.setState({isCalled: true});
      clearTimeout(this.state.timer);
      this.setState({timer: setTimeout(() => {
        this.setState({isCalled: false});
      }, interval)});
      return functionTobeCalled(...args);
    }
    return;
  };

  render () {
    const {onPress = noop, disabled, children, highlightColor = '#E0E0E0', ...extraProps} = this.props;
    const onpressHandler = this.callOnceInInterval(onPress);
    const background = (Platform.Version >= 21) ? TouchableNativeFeedback.Ripple(highlightColor) : TouchableNativeFeedback.SelectableBackground();
    const foregroundRippleSupport = TouchableNativeFeedback.canUseNativeForeground();
    return (
      <TouchableNativeFeedback
        onPress={onpressHandler}
        disabled={disabled}
        useForeground={foregroundRippleSupport}
        background={background}>
        <View {...extraProps}>
          {children}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default Touchable;
