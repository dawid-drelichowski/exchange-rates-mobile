//@flow
import React, {Component, Element} from 'react'
import {ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
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
    let disconnected: Icon | void

    if (!this.props.isConnected) {
      disconnected = <Icon name="plug" style={styles.disconnectedIcon}/>
    }
    return <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
      {disconnected}
      <Offices/>
    </ScrollView>
  }
}