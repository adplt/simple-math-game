import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './Game.page.style';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';

export default class Game extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  state = {
    validAnswer: false
  }

  decidedChoose = 0;
  answerOption = [];
  rightResult = 0
  rand1 = 0;
  rand2 = 0;

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
      <Touchable style={{flex: 1}} key={i} onPress={this.validateAnswer(value)}>
        <Text style={styles.welcome}>
          {`${value}`}
        </Text>
      </Touchable>
    );

  validateAnswer = (value) => () => {
    if (this.rightResult === value) {
      this.answerOption = [];
      this.decidedChoose = this.decided();
      this.generateRandom();
      this.setState({validAnswer: true});
    }
  }

  rightAnswer = (operator) => {
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
    const {navigation} = this.props;
    const {menu, operator, score} = navigation.state.params;
    return (
      menu === 'count' ?
        <View style={styles.container}>
          <Text style={styles.instructions}>{`${score} ${this.decidedChoose}`}</Text>
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
        </View> : <View />
    );
  }
}
