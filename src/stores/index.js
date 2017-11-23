//@flow
import type {Store} from 'redux';
import {createStore} from 'redux';
import {NetInfo} from 'react-native';
import database from '../data/firebase';
import Creators from '../actions';
import reducer from '../reducers';

const store: Store = createStore(reducer);

NetInfo.isConnected.addEventListener('change', (isConnected: boolean): void => {
  store.dispatch(Creators.connectionStatusChange(isConnected));
});

database.ref('rates').on('value', (rates): void => {
  store.dispatch(Creators.ratesChange(rates.val()));
});

database.ref('offices').on('value', (offices): void => {
  store.dispatch(Creators.officesChange(offices.val()));
});

export default store;
