import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createAction_addColumn} from '../../redux/ColumnRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};
  console.log('filter ',filteredLists);
  console.log('listParams ',listParams);

  return {
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
