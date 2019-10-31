import {connect} from 'react-redux';
import Home from './Home';
import {getAllLists, createAction_addList} from '../../redux/AppRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getAllLists(state),
});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createAction_addList({
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
