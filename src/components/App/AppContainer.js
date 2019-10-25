import {connect} from 'react-redux';
import App from './App';
import {getAllLists, createAction_addList} from '../../redux/AppRedux';
import {createAction_moveCard} from '../../redux/CardRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getAllLists(state),
});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createAction_addList({
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(
    payload)),
});
/*const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard({
    payload,
  })),
});*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
