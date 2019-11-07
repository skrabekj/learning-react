import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';
import {getCardsForSearch} from '../../redux/CardRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
  columns: state.columns,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
