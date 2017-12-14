//@flow
import React, {Component, Element} from 'react'
import {ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RatesTable from '../containers/RatesTable'
import styles from '../styles'

export default class RatesScreen extends Component<void, void, void> {
  static navigationOptions = {
    tabBarLabel: 'Rates',
    tabBarIcon: ({tintColor}): Icon => <Icon name="table" style={[styles.tabBarIcon, {color: tintColor}]}/>
  }
  render(): Element<ScrollView> {
    return <ScrollView contentContainerStyle={styles.screenContent}>
      <RatesTable/>
    </ScrollView>
  }
}
