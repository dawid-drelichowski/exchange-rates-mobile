//@flow
import type {State} from '../types/state'
import type {Props} from '../components/OfficesScreen'
import {connect} from 'react-redux'
import OfficesScreen from '../components/OfficesScreen'

export default connect(
  (state: State): Props => {
    return {isConnected: state.isConnected}
  },
  (): {} => {
    return {}
  }
)(OfficesScreen)