import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './Game.page.style';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import noop from 'lodash/noop';

export default class Game extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    updateScore: PropTypes.func,
    score: PropTypes.number
  }

  state = {
    validAnswer: false
  }

  decidedChoose = 0;
  answerOption = [];
  rightResult = 0
  rand1 = 0;
  rand2 = 0;

  randomAnswer = 0;

  componentWillMount () {
    this.decidedChoose = this.decided();
    this.generateRandom();
  }

  answerRawOneOption = () => {
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

    return this.renderOption(answerRawOne);
  }

  answerRawTwoOption = () => {
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

    return this.renderOption(answerRawTwo);
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

  renderOption = (answer) =>
    answer.map((value, i) =>
      <Touchable style={styles.halfWidth} key={i} onPress={this.validateAnswer(value)}>
        <Text style={styles.welcome}>
          {`${value}`}
        </Text>
      </Touchable>
    );

  validateAnswer = (value) => () => {
    const {navigation} = this.props;
    const {menu} = navigation.state.params;
    let {updateScore = noop, score} = this.props;
    if (menu === 'count') {
      if (this.rightResult === value) {
        this.answerOption = [];
        this.decidedChoose = this.decided();
        this.generateRandom();
        this.setState({validAnswer: true});
        score += 1;
        updateScore(score += 1);
      }
    } else {
      if (value === (this.rightResult === this.randomAnswer)) {
        this.randomAnswer = 0;
        this.decidedChoose = this.decided();
        this.generateRandom();
        this.setState({validAnswer: true});
        score += 1;
        updateScore(score += 1);
      }
    }
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

  render () {
    this.validateRandomQuestion();
    const {navigation, score} = this.props;
    const {menu, operator} = navigation.state.params;
    return (
      menu === 'count' ?
        <View style={styles.container}>
          <Text style={styles.instructions}>{`${'Score: '}${score}`}</Text>
          <Text style={styles.welcome}>
            {`${this.rand1} ${operator === '/' ? ':' : operator} ${this.rand2} ${' = ?'}`}
          </Text>
          <View style={styles.row}>
            {
              this.answerRawOneOption()
            }
          </View>
          <View style={styles.row}>
            {
              this.answerRawTwoOption()
            }
          </View>
        </View> :
        <View style={styles.container}>
          <Text style={styles.instructions}>{`${'Score:'} ${score}`}</Text>
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
    );
  }
}
