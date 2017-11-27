//@flow
import type {State} from '../types/state'
import config from 'react-native-config'
import storage from 'redux-persist/es/storage'
import {persistReducer} from 'redux-persist'
import {Actions} from '../actions'

const reducer = (state: State = {isConnected: false, rates: [], offices: []}, action) => {
  switch (action.type) {
    case Actions.CONNECTION_STATUS_CHANGE:
      return {...state, isConnected: action.isConnected}
    case Actions.RATES_CHANGE:
      return {...state, rates: action.rates}
    case Actions.OFFICES_CHANGE:
      return {...state, offices: action.offices}
    default:
      return state
  }
}

export default persistReducer(
  {key: config.PERSISTOR_KEY, blacklist: ['isConnected'], storage},
  reducer
)
