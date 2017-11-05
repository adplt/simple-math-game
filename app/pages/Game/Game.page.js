import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Animated
} from 'react-native';
import styles from './Game.page.style';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import noop from 'lodash/noop';
import OverlayModal from '../../components/OverlayModal/OverlayModal.component';
import RenderAnswer from '../../components/RenderAnswer/RenderAnswer.component';

export default class Game extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    updateScore: PropTypes.func,
    score: PropTypes.number,
    resetToBoard: PropTypes.func
  }

  state = {
    validAnswer: false,
    interval: 5,
    firstTime: false,
    showAnswer: false,
    scrollX: new Animated.Value(0),
    scrollY: new Animated.Value(0),
    showModal: false,
    stopTime: false
  }

  decidedChoose = 0;
  answerOption = [];
  rightResult = 0
  rand1 = 0;
  rand2 = 0;
  randomAnswer = 0;

  _onInterpolate = (inputRange, outputRange) => this.state.scrollY.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp',
  });

  componentWillMount () {
    this.decidedChoose = this.decided();
    this.validateRandomQuestion();
    this.generateRandom();
  }

  componentDidMount () {
    setInterval(() => {
      const {firstTime, interval, stopTime} = this.state;
      if (firstTime && !stopTime) this.setState({interval: interval - 1}); // this.interval = this.interval - 1;
      if (interval === 0) this.setState({showModal: true});
    }, 1000);
  }

  answerRawOneOption = () => {
    const {interval} = this.state;
    const answer = chunk(this.answerOption, 2);
    const answerRawOne = answer[0];

    if (this.decidedChoose === 1) {
      const index = Number(this.decided() - 1);
      let flag = false;
      for (let i = 0; i < 4; i++) if (this.answerOption[i] === this.rightResult) flag = true;
      if (!flag) {
        this.answerOption[index] = this.rightResult;
        answerRawOne[index] = this.rightResult;
      }
    }

    const opacity = this._onInterpolate([0, 0, 0], [0, 1, 1]);
    return answerRawOne.map((val, i) =>
      <RenderAnswer
        key={i}
        onPress={this.validateAnswer}
        disabled={interval === 0}
        value={val}
        opacity={opacity}
      />);
  }

  answerRawTwoOption = () => {
    const {interval} = this.state;
    const answer = chunk(this.answerOption, 2);
    const answerRawTwo = answer[1];

    if (this.decidedChoose === 2) {
      const index = Number(this.decided() - 1);
      let flag = false;
      for (let i = 0; i < 4; i++) if (this.answerOption[i] === this.rightResult) flag = true;

      if (!flag) {
        this.answerOption[index + 2] = this.rightResult;
        answerRawTwo[index] = this.rightResult;
      }
    }

    const opacity = this._onInterpolate([0, 0, 0], [0, 1, 1]);
    return answerRawTwo.map((val, i) =>
      <RenderAnswer
        key={i}
        onPress={this.validateAnswer}
        disabled={interval === 0}
        value={val}
        opacity={opacity}
      />);
  }

  decided = () => Math.floor(Math.random() * 2 + 1);

  generateRandom = () => {
    const {navigation} = this.props;
    const {menu} = navigation.state.params;

    if (menu === 'count') {
      let random = Math.floor(Math.random() * 20);
      for (let i = 0; i < 10; i++) {
        if (i === 0) this.answerOption.push(random);
        else if (this.answerOption.length === 4) break;
        else {
          this.checkingDuplicateOption(random, i);
          random = Math.floor(Math.random() * 20);
        }
      }
    }
  }

  checkingDuplicateOption = (random, i) => {
    let flag = false;
    for (let j = i; j >= 0; j--) {
      if (this.answerOption[j] === random) {
        flag = true;
        break;
      } else flag = false;
    }
    if (!flag) this.answerOption.push(random);
    else {
      random = Math.floor(Math.random() * 20);
      this.checkingDuplicateOption(random, i);
    }
  }

  validateAnswer = (value) => () => {
    const {navigation} = this.props;
    const {menu} = navigation.state.params;
    let {updateScore = noop, score} = this.props;
    const {firstTime} = this.state;
    if (menu === 'count') {
      if (this.rightResult === value) {
        this.answerOption = [];
        this.decidedChoose = this.decided();
        this.generateRandom();
        this.setState({validAnswer: true});
        score += 1;
        updateScore(score += 1);
        this.validateRandomQuestion();
      }
    } else {
      if (value === (this.rightResult === this.randomAnswer)) {
        this.randomAnswer = 0;
        this.decidedChoose = this.decided();
        this.generateRandom();
        this.setState({validAnswer: true});
        score += 1;
        updateScore(score += 1);
        this.validateRandomQuestion();
      }
    }
    if (firstTime === false) this.setState({firstTime: true});
  }

  rightAnswer = (operator) => {
    const {navigation} = this.props;
    const {menu} = navigation.state.params;

    switch (operator) {
    case '+': {
      this.rightResult = Number(this.rand1 + this.rand2);
      break;
    }
    case '-': {
      this.rightResult = Number(this.rand1 - this.rand2);
      break;
    }
    case '*': {
      this.rightResult = Number(this.rand1 * this.rand2);
      break;
    }
    case '/': {
      this.rightResult = Number(this.rand1 / this.rand2);
      break;
    }
    default: {
      break;
    }
    }

    if (menu === 'choose') this.randomAnswer = this.decidedChoose === 2 ? this.rightResult : Math.floor(Math.random() * 20);
  }

  validateRandomQuestion = () => {
    const {navigation} = this.props;
    const {operator} = navigation.state.params;
    this.setRandomQuest(operator);
    if (operator === '+') while (this.rand1 <= this.rand2) this.setRandomQuest(operator);
    if (operator === '-') while (this.rand1 <= this.rand2) this.setRandomQuest(operator);
    if (operator === '*') while (this.rand1 <= this.rand2) this.setRandomQuest(operator);
    if (operator === '/') while (this.rand1 % this.rand2 !== 0 || this.rand1 <= this.rand2) this.setRandomQuest(operator);
  }

  setRandomQuest = (operator) => {
    this.rand1 = Math.floor(Math.random() * 10);
    this.rand2 = Math.floor(Math.random() * 10);
    this.rightAnswer(operator);
  }

  closeModal = () => {
    const {resetToBoard} = this.props;
    this.setState({showModal: false, stopTime: true});
    setTimeout(() => resetToBoard(), 1000);
  }

  showAnswer = (menu) => {
    const {stopTime} = this.state;
    menu === 'count' && !stopTime ? setTimeout(() => this.setState({showAnswer: true}), 1000) : null;
  }

  render () {
    const {showModal, interval, showAnswer} = this.state;
    const {navigation, score} = this.props;
    const {menu, operator} = navigation.state.params;
    this.showAnswer(menu);
    return (
      <ImageBackground
        source={require('../../image/background.jpg')}
        style={{flex: 1}}>
        {
          menu === 'count' ?
            <View style={styles.container}>
              <Text style={styles.instructions}>{`${'Score: '}${score} ${'Interval: '} ${interval < 0 ? 0 : interval}`}</Text>
              <Text style={styles.welcome}>
                {`${this.rand1} ${operator === '/' ? ':' : operator} ${this.rand2} ${' = ?'}`}
              </Text>
              <View style={styles.row}>
                {
                  showAnswer ? this.answerRawOneOption() : null
                }
              </View>
              <View style={styles.row}>
                {
                  showAnswer ? this.answerRawTwoOption() : null
                }
              </View>
            </View> :
            <View style={styles.container}>
              <Text style={styles.instructions}>{`${'Score:'} ${score} ${'Interval: '} ${interval < 0 ? 0 : interval}`}</Text>
              <Text style={styles.welcome}>
                {`${this.rand1} ${operator === '/' ? ':' : operator} ${this.rand2} ${'='} ${this.randomAnswer} ${'?'}`}
              </Text>
              <View style={styles.row}>
                <Touchable style={styles.halfWidth} onPress={this.validateAnswer(true)}>
                  <Text style={styles.welcome}>
                    {'True'}
                  </Text>
                </Touchable>
                <Touchable style={styles.halfWidth} onPress={this.validateAnswer(false)}>
                  <Text style={styles.welcome}>
                    {'False'}
                  </Text>
                </Touchable>
              </View>
            </View>
        }
        <OverlayModal showModal={showModal} closeModal={this.closeModal} />
      </ImageBackground>
    );
  }
}
