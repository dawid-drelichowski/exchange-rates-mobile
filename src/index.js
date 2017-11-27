import {AppRegistry} from 'react-native'
import store from './stores'
import persistor from './persistors'
import {createApp} from './components/App'

AppRegistry.registerComponent('ExchangeRatesMobile', () => createApp(store, persistor))
