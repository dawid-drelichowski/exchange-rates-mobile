//@flow
import type {Node} from 'react';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Calculator from '../containers/Calculator';
import styles from '../styles';

export default class CalculatorScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Calculator',
    tabBarIcon: ({tintColor}) => <Icon name="calculator" style={[styles.tabBarIcon, {color: tintColor}]}/>
  };
  render(): Node {
    return <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
      <Calculator/>
    </ScrollView>
  }
}
