import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './Game.page.style';
import Touchable from '../../components/Touchable/Touchable.component';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import autobind from 'class-autobind';

export default class Game extends Component {

  constructor (props) {
    super(props);
    autobind(this);
    this.state = {
      validAnswer: false
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  }

  // state = {
  //   validAnswer: false
  // }

  // componentDidCatch (error, info) {
  //   this.setState({hasError: true});
  // }

  decidedChoose = 0;
  answerOption = [];
  rightResult = 0

  componentWillMount () {
    this.decidedChoose = this.decided();
    this.generateRandom();
  }

  answerRawOneOption = (rand1, opt, rand2) => {
    this.rightResult = Number(rand1 + rand2);
    const answer = chunk(this.answerOption, 2);
    const answerRawOne = answer[0];

    if (this.decidedChoose === 1) {
      const index = Number(this.decided() - 1);
      let flag = false;
      for (let i = 0; i < 4; i++) {
        if (this.answerOption[i] === this.rightResult) {
          flag = true;
        }
      }

      if (!flag) {
        this.answerOption[index] = this.rightResult;
        answerRawOne[index] = this.rightResult;
      }
    }

    return this.renderOption(answerRawOne);
  }

  answerRawTwoOption = (rand1, opt, rand2) => {
    this.rightResult = Number(rand1 + rand2);
    const answer = chunk(this.answerOption, 2);
    const answerRawTwo = answer[1];

    if (this.decidedChoose === 2) {
      const index = Number(this.decided() - 1);
      let flag = false;
      for (let i = 0; i < 4; i++) {
        if (this.answerOption[i] === this.rightResult) {
          flag = true;
        }
      }

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
      if (i === 0) {
        this.answerOption.push(random);
      } else if (this.answerOption.length === 4) {
        break;
      } else {
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
      } else {
        flag = false;
      }
    }
    if (!flag) {
      this.answerOption.push(random);
    } else {
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

  render () {
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    const opt = '+';
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{`${navigation.state.params.score} ${this.decidedChoose}`}</Text>
        <Text style={styles.welcome}>
          {`${rand1} ${opt} ${rand2} ${' = ?'}`}
        </Text>
        <View style={styles.row}>
          {
            this.answerRawOneOption(rand1, opt, rand2)
          }
        </View>
        <View style={styles.row}>
          {
            this.answerRawTwoOption(rand1, opt, rand2)
          }
        </View>
      </View>
    );
  }
}
