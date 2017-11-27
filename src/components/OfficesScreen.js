//@flow
import React, {Component, Element} from 'react'
import {ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ConnectionWarning from './ConnectionWarning'
import Offices from '../containers/Offices'
import styles from '../styles'

export type Props = {
  isConnected: boolean
}

export default class OfficesScreen extends Component<Props, Props, void> {
  static defaultProps: Props = {
    isConnected: false
  };
  static navigationOptions = {
    tabBarLabel: 'Offices',
    tabBarIcon: ({tintColor}): Icon => <Icon name="map-marker" style={[styles.tabBarIcon, {color: tintColor}]}/>
  };
  render(): Element<ScrollView> {
    return <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
      <ConnectionWarning isConnected={this.props.isConnected}/>
      <Offices/>
    </ScrollView>
  }
}