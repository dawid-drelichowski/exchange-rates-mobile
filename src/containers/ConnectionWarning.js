//@flow
import type {State} from '../types/state'
import type {Props} from '../components/OfficesScreen'
import {connect} from 'react-redux'
import ConnectionWarning from "../components/ConnectionWarning"

export default connect(
  (state: State): Props => {
    return {isConnected: state.isConnected}
  },
  (): {} => {
    return {}
  }
)(ConnectionWarning)