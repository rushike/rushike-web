import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import entryReducer from './EntryReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
