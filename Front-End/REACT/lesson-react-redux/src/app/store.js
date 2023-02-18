import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../fetures/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterSlice
  }
})