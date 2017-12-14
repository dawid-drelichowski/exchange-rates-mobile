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
  render(): Element<View> {
    return <View>
      <Picker style={styles.picker} onValueChange={this.onCountryChange} selectedValue={this.getCountry()}>
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
  getCountry(): string {
    const rates: rates = this.props.rates
    let country: string = this.state.country
    if (country) {
      return country
    }
    if (rates && rates[0]) {
      country = rates[0].country
    }
    return country
  }
  calculate(): number {
    const {transaction, amount} = this.state,
      country = this.getCountry(),
      rate = this.props.rates.filter(rate => {
        return rate.country === country
      }).shift()
    if (rate && transaction) {
      return amount * rate[transaction]
    }
    return 0
  }
}
