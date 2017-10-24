//@flow
import React, {Component} from 'react';
import {Picker, Text, TextInput, View} from 'react-native';
import {database} from '../store';
import type {rates} from '../types/rates';
import styles from '../styles';

type state = {
  rates: rates,
  country: string,
  transaction: string,
  amount: number,
  result: number
};

export default class Calculator extends Component {
  state: state = {
    rates: [],
    country: '',
    transaction: 'purchase',
    amount: 0,
    result: 0
  };
  onAmountChange = (text: string) => {
    let amount = parseInt(text, 10);

    if (isNaN(amount)) {
      amount = 0;
    }
    this.setState({amount, result: this.calculate({...this.state, amount})});
  };
  onTransactionChange = (transaction: string) => {
    this.setState({transaction, result: this.calculate({...this.state, transaction})});
  };
  onCountryChange = (country: string) => {
    this.setState({country, result: this.calculate({...this.state, country})});
  };
  componentWillMount() {
    database.ref('rates').on('value', rates => {
      let country = this.state.country;

      rates = rates.val();
      country = country || rates[0].country;
      this.setState({rates, country, result: this.calculate({...this.state, country, rates})});
    });
  }
  render() {
    return <View>
      <Picker style={styles.picker} onValueChange={this.onCountryChange} selectedValue={this.state.country}>
        {this.state.rates.map((rate, index) => {
          return <Picker.Item key={index} label={rate.country} value={rate.country}/>;
        })}
      </Picker>
      <Picker style={styles.picker} onValueChange={this.onTransactionChange} selectedValue={this.state.transaction}>
        <Picker.Item key={0} label="Purchase" value="purchase"/>
        <Picker.Item key={1} label="Sale" value="sale"/>
      </Picker>
      <TextInput onChangeText={this.onAmountChange} style={styles.amountInput} maxLength={10} keyboardType="numeric"/>
      <Text>{this.state.result}</Text>
    </View>
  }
  calculate(state: state) {
    const {rates, country, transaction, amount} = state,
      rate = rates.filter(rate => {
      return rate.country === country;
    }).shift();
    if (rate && transaction) {
      return amount * rate[transaction];
    }
  }
}