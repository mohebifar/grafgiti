import { combineReducers } from 'redux';
import calendar from './modules/calendar';
import progress from './modules/progress';

export default combineReducers({
  calendar,
  progress
});
