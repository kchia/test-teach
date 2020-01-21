//  import the useState Hook from React:
import React, { useState } from 'react';

function Counter() {
  // declare count variable and set it to 0
  let [count, setCount] = useState(0); // useState accepts the initial state as the only argument and returns the current state and the function that updates the count state
  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default Counter;
