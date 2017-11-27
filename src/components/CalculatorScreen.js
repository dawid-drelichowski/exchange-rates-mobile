//@flow
import React, {Component, Element} from 'react'
import {ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Calculator from '../containers/Calculator'
import styles from '../styles'

export default class CalculatorScreen extends Component<void, void, void> {
  static navigationOptions = {
    tabBarLabel: 'Calculator',
    tabBarIcon: ({tintColor}): Icon => <Icon name="calculator" style={[styles.tabBarIcon, {color: tintColor}]}/>
  };
  render(): Element<ScrollView> {
    return <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
      <Calculator/>
    </ScrollView>
  }
}
