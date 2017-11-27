//@flow
import type {rates} from '../types/rates'
import React, {Component, Element} from 'react'
import Table from 'react-native-simple-table'

export type Props = {
  rates: rates
}

export default class RatesTable extends Component<void, Props, void> {
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
  render(): Element<Table> {
    return <Table height={400} columnWidth={70} columns={this.constructor.columns} dataSource={this.props.rates} />
  }
}
