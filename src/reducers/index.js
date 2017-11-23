//@flow
import type {State} from '../types/state';
import {Actions} from '../actions';

export default (state: State = {isConnected: false, rates: [], offices: []}, action) => {
  switch (action.type) {
    case Actions.CONNECTION_STATUS_CHANGE:
      return {...state, isConnected: action.isConnected};
    case Actions.RATES_CHANGE:
      return {...state, rates: action.rates};
    case Actions.OFFICES_CHANGE:
      return {...state, offices: action.offices};
    default:
      return state;
  }
};
