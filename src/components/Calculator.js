//@flow
import type {rates} from '../types/rates'
import React, {Component, Element} from 'react'
import {Picker, Text, TextInput, View} from 'react-native'
import styles from '../styles'

export type Props = {
  rates: rates
};

type State = {
  country: string,
  transaction: string,
  amount: number
};

export default class Calculator extends Component<void, Props, State> {
  state: State = {
    country: '',
    transaction: 'purchase',
    amount: 0
  };
  onAmountChange = (text: string): void => {
    let amount: number = parseInt(text, 10)

    if (isNaN(amount)) {
      amount = 0
    }
    this.setState({amount})
  };
  onTransactionChange = (transaction: string): void => {
    this.setState({transaction})
  };
  onCountryChange = (country: string): void => {
    this.setState({country})
  };
  render(): Element<any> {
    return <View>
      <Picker style={styles.picker} onValueChange={this.onCountryChange} selectedValue={this.state.country}>
        {this.props.rates.map((rate, index) => {
          return <Picker.Item key={index} label={rate.country} value={rate.country}/>
        })}
      </Picker>
      <Picker style={styles.picker} onValueChange={this.onTransactionChange} selectedValue={this.state.transaction}>
        <Picker.Item key={0} label="Purchase" value="purchase"/>
        <Picker.Item key={1} label="Sale" value="sale"/>
      </Picker>
      <TextInput onChangeText={this.onAmountChange} style={styles.amountInput} maxLength={10} keyboardType="numeric"/>
      <Text>{this.calculate()}</Text>
    </View>
  }
  componentWillReceiveProps(nextProps: Props): void {
    if (this.state.country) {
      return
    }
    this.setState({country: nextProps.rates[0].country})
  }
  calculate(): number {
    const {country, transaction, amount} = this.state,
      rate = this.props.rates.filter(rate => {
        return rate.country === country
      }).shift()
    if (rate && transaction) {
      return amount * rate[transaction]
    }
    return 0
  }
}
