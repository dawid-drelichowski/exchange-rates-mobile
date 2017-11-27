//@flow
// @todo: combine with Calculator - almost same code
import type {State} from '../types/state'
import type {Props} from '../components/RatesTable'
import {connect} from 'react-redux'
import RatesTable from '../components/RatesTable'

export default connect(
  (state: State): Props => {
    return {rates: state.rates}
  },
  (): {} => {
    return {}
  }
)(RatesTable)