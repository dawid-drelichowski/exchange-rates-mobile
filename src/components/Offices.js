//@flow
import type {offices} from '../types/offices'
import React, {Component, Element} from 'react'
import {View} from 'react-native'
import Office from './Office'

export type Props = {
  offices: offices
}

export default class Offices extends Component<Props, Props, void> {
  static defaultProps: Props = {
    offices: []
  };
  render(): Element<View> {
    return <View>
      {this.props.offices.map((value, index) => {
        return <Office key={index} {...value}/>
      })}
    </View>
  }
}
