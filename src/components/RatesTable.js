//@flow
import React, {Component} from 'react';
import Table from 'react-native-simple-table';
import {database} from '../store';
import type {rates} from '../types/rates';

export default class RatesTable extends Component {
  static columns: Array<{|title: string, dataIndex: string, width?: number|}> = [
    {
      title: 'Country',
      dataIndex: 'country',
      width: 120,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
    },
    {
      title: 'Purchase',
      dataIndex: 'purchase',
    },
    {
      title: 'Sale',
      dataIndex: 'sale',
    }
  ];
  state: {rates: rates} = {rates: []};
  componentWillMount() {
    database.ref('rates').on('value', rates => this.setState({rates: rates.val()}));
  }
  render() {
    return <Table height={400} columnWidth={70} columns={this.constructor.columns} dataSource={this.state.rates} />
  }
}