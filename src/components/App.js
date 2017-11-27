//@flow
import type {Element} from 'react'
import type {Store} from 'redux'
import type {Persistor} from 'redux-persist/es/types'
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react'
import Navigator from './Navigator'

export default class App extends Component<void, {store: Store, persistor: Persistor}, void> {
  render(): Element<Provider> {
    return <Provider store={this.props.store}>
      <PersistGate persistor={this.props.persistor}>
        <Navigator/>
      </PersistGate>
    </Provider>
  }
}

export function createApp(store: Store, persistor: Persistor) {
  return class extends App {
    render(): Element<any> {
      return <App store={store} persistor={persistor}/>
    }
  }
}
