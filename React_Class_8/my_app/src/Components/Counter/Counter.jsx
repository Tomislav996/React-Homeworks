import { useSelector, useDispatch } from 'react-redux'

import React from 'react'

const Counter = () => {

  const count = useSelector((state) => state.count)
  const dispatch = useDispatch();
  
  return (
    <div>
        <h1>Counter: 0</h1>
        <button onClick={}>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default Counter