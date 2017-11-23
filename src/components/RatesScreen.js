//@flow
import type {Node} from 'react';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RatesTable from '../containers/RatesTable';
import styles from '../styles';

export default class RatesScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Rates',
    tabBarIcon: ({tintColor}) => <Icon name="table" style={[styles.tabBarIcon, {color: tintColor}]}/>
  };
  render(): Node {
    return <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
      <RatesTable/>
    </ScrollView>
  }
}
