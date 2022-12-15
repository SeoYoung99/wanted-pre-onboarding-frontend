//리덕스 적용!!!
import {combineReducers} from 'redux';
import todo, {TodoType} from './todos/reducer';

export type RootState = {
  todo: TodoType;
}

const rootReducer = combineReducers({
  todo,
})

export default rootReducer;
