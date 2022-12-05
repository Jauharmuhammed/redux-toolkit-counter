import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'

export const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <section>
      <div>
        <div className="counter">
          {count}
        </div>
        <div className="basicButtons">
          <button onClick={()=> dispatch(increment())}>+</button>
          <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
      </div>
    </section>
  )
}
