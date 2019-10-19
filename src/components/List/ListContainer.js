import {connect} from 'react-redux';
import List from './List';

const mapStateToProps = state => ({
  columns: state.columns,
});

export default connect(mapStateToProps)(List);
