//@flow
import type {rates} from '../types/rates'
import type {offices} from '../types/offices'

export type Action = {
  type: string
}

export class Actions {
  static CONNECTION_STATUS_CHANGE: string = 'CONNECTION_STATUS_CHANGE';
  static RATES_CHANGE: string = 'RATES_CHANGE';
  static OFFICES_CHANGE: string = 'OFFICES_CHANGE';
}

export default class Creators {
  static connectionStatusChange(isConnected: boolean): Action {
    return {type: Actions.CONNECTION_STATUS_CHANGE, isConnected}
  }
  static ratesChange(rates: rates): Action {
    return {type: Actions.RATES_CHANGE, rates}
  }
  static officesChange(offices: offices): Action {
    return {type: Actions.OFFICES_CHANGE, offices}
  }
}
