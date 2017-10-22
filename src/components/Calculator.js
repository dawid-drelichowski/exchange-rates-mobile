//@flow
import React, {Component} from 'react';
import {Picker, Text, TextInput, View} from 'react-native';
import {database} from '../store';
import type {rates} from '../types/rates';
import styles from '../styles';

export default class Calculator extends Component {
  state: {
    rates: rates,
    country: string,
    transaction: string,
    amount: number,
    result: number
  } = {
    rates: [],
    country: '',
    transaction: '',
    amount: 0,
    result: 0
  };
  onAmountChange = (text: string) => {
    this.setState({amount: parseInt(text, 10)});
    this.calculate();
  };
  onTransactionChange = (transaction: string) => {
    this.setState({transaction});
    this.calculate();
  };
  onCountryChange = (country: string) => {
    this.setState({country});
    this.calculate();
  };
  componentWillMount() {
    database.ref('rates').on('value', rates => this.setState({rates: rates.val()}));
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
  calculate() {
    const rate = this.state.rates.filter(rate => {
      return rate.country === this.state.country;
    }).shift();
    if (rate && this.state.transaction) {
      this.setState({result: this.state.amount * rate[this.state.transaction]});
    }

  }
}