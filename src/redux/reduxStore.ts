import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducers);
export default store;
