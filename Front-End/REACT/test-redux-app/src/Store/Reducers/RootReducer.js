import { combineReducers } from 'redux';
// import CounterSlice from './CounterSlice';
import projectReducer from './projectReducer';

const RootReducer = combineReducers({
    // counter: CounterSlice
    project: projectReducer
});

export default RootReducer;