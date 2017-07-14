import { combineReducers } from 'redux';

import User from './reducer_user';
import Goals from './reducer_goals';

export default combineReducers({
  user: User,
  goals: Goals
})
