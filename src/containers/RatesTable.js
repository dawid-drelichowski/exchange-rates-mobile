//@flow
// @todo: combine with Calculator - almost same code
import {connect} from 'react-redux';
import RatesTable from '../components/RatesTable';

export default connect(
  state => {
    return {rates: state.rates};
  },
  () => {
    return {};
  }
)(RatesTable);