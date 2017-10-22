//@flow
import React, {Component} from 'react';
import {View} from 'react-native';
import {database} from '../store';
import Office from './Office';
import type {OfficeProperties} from './Office';

export default class Offices extends Component {
  state: {offices: Array<OfficeProperties>} = {offices: []};
  componentWillMount() {
    database.ref('offices').on('value', offices => this.setState({offices: offices.val()}));
  }
  render() {
    return <View>
      {this.state.offices.map((value, index) => {
        return <Office key={index} {...value}/>;
      })}
    </View>
  }
}