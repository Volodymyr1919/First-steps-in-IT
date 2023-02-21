import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducers/CounterSlice';
// eslint-disable-next-line no-unused-vars
// import styles from './Counter.module.css'

export default function Counter() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="action-button shadow animate green"
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="action-button shadow animate red"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}