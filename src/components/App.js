//@flow
import type {Node} from 'react'
import type {Store} from 'redux';
import type {Persistor} from 'redux-persist/es/integration/react';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Navigator from './Navigator';

export default class App extends Component<{store: Store, persistor: Persistor}> {
  render(): Node {
    return <Provider store={this.props.store}>
      <PersistGate persistor={this.props.persistor}>
        <Navigator/>
      </PersistGate>
    </Provider>
  }
}

export function createApp(store: Store, persistor: Persistor): App {
  return class extends App {
    render(): Node {
      return <App store={store} persistor={persistor}/>
    }
  }
}
