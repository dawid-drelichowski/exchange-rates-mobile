//@flow
import type {Node} from 'react';
import type {offices} from '../types/offices';
import React, {Component} from 'react';
import {View} from 'react-native';
import Office from './Office';

type Props = {
  offices: offices
}

export default class Offices extends Component<Props> {
  static defaultProps: Props = {
    offices: []
  };
  render(): Node {
    return <View>
      {this.props.offices.map((value, index) => {
        return <Office key={index} {...value}/>;
      })}
    </View>
  }
}
