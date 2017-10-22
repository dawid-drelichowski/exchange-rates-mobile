import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Offices from './Offices';
import styles from '../styles';

export default class OfficesScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Offices',
    tabBarIcon: ({tintColor}) => <Icon name="map-marker" style={[styles.tabBarIcon, {color: tintColor}]}/>
  };
  render() {
    return <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
      <Offices/>
    </ScrollView>
  }
}