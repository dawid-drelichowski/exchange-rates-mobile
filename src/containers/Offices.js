//@flow
import type {State} from '../types/state'
import type {Props} from '../components/Offices'
import {connect} from 'react-redux'
import Offices from '../components/Offices'

export default connect(
  (state: State): Props => {
    return {offices: state.offices}
  },
  (): {} => {
    return {}
  }
)(Offices)
