//@flow
import {connect} from 'react-redux';
import Offices from '../components/Offices';

export default connect(
  state => {
    return {offices: state.offices};
  },
  (): {} => {
    return {};
  }
)(Offices);
