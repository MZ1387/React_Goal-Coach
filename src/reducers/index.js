import { combineReducers } from 'redux';

import User from './reducer_user';
import Goals from './reducer_goals';
import CompleteGoals from './reducer_completed_goals';

export default combineReducers({
  user: User,
  goals: Goals,
  completeGoals: CompleteGoals
})
