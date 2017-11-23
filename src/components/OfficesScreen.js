//@flow
import type {Node} from 'react';
import type {NavigationScreenConfig} from 'react-navigation';
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Offices from '../containers/Offices';
import styles from '../styles';

type Props = {
  isConnected: boolean
}

export default class OfficesScreen extends Component<Props> {
  static defaultProps: Props = {
    isConnected: false
  };
  static navigationOptions: NavigationScreenConfig = {
    tabBarLabel: 'Offices',
    tabBarIcon: ({tintColor}) => <Icon name="map-marker" style={[styles.tabBarIcon, {color: tintColor}]}/>
  };
  render(): Node {
    let disconnected;

    if (!this.props.isConnected) {
      disconnected = <Icon name="plug" style={styles.disconnectedIcon}/>;
    }
    return <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
      {disconnected}
      <Offices/>
    </ScrollView>
  }
}