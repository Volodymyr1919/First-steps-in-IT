import { combineReducers } from 'redux';
import CounterSlice from './CounterSlice';

const RootReducer = combineReducers({
    counter: CounterSlice
});

export default RootReducer;