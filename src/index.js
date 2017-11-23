// @flow
import {AppRegistry} from 'react-native';
import store from './stores';
import {createApp} from './components/App';

AppRegistry.registerComponent('ExchangeRatesMobile', () => createApp(store));
