import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import noop from 'lodash/noop';

class Touchable extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node,
    highlightOpacity: PropTypes.number
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
    const {onPress = noop, disabled, children, highlightOpacity, ...extraProps} = this.props;
    const onpressHandler = this.callOnceInInterval(onPress);
    return (
      <TouchableOpacity
        {...extraProps}
        onPress={onpressHandler}
        disabled={disabled}
        useForeground={true}
        activeOpacity={highlightOpacity}>
        {children}
      </TouchableOpacity>
    );
  }
}

export default Touchable;
