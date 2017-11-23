//@flow
import type {Node} from 'react'
import type {Store} from 'redux';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigator from './Navigator';

export default class App extends Component<{store: Store}> {
  render(): Node {
    return <Provider store={this.props.store}>
      <Navigator/>
    </Provider>
  }
}

export function createApp(store: Store): App {
  return class extends App {
    render(): Node {
      return <App store={store}/>
    }
  }
}
