import { combineReducers } from 'redux';
import todo, { TodoState } from './todo';

export type RootState = {
  todo: TodoState;
};

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
