//@flow
// @todo: combine with RatesTable - almost same code
import type {State} from '../types/state'
import type {Props} from '../components/Calculator'
import {connect} from 'react-redux'
import Calculator from '../components/Calculator'

export default connect(
  (state: State): Props => {
    return {rates: state.rates}
  },
  (): {} => {
    return {}
  }
)(Calculator)
