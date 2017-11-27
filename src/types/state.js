//@flow
import type {rates} from './rates'
import type {offices} from './offices'

export type State = {|isConnected: boolean, rates: rates, offices: offices|};
