//@flow
import {connect} from 'react-redux';
import OfficesScreen from '../components/OfficesScreen';

export default connect(
  state => {
    return {isConnected: state.isConnected};
  },
  () => {
    return {};
  }
)(OfficesScreen);