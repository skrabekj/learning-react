import shortid from 'shortid';

// selectors
export const getAllLists = ({lists}) => lists;

// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LISTS = createActionName('ADD_LISTS');

// action creators
export const createAction_addList = payload => ({ payload, type: ADD_LISTS });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_LISTS:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}
