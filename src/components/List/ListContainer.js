import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createAction_addColumn} from '../../redux/ColumnRedux';
import {createAction_moveCard} from '../../redux/CardRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};
  console.log('filter ',filteredLists);
  console.log('listParams ',listParams);

  return {
    columns: getColumnsForList(state, id),
    title: listParams.title,
    image: listParams.image,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.match.params.id,
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(
    payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
