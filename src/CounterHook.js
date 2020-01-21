//  import the useState Hook from React:
import React, { useState } from 'react';

function Counter() {
  // declare count variable and set it to 0
  let [count, setCount] = useState(0); // useState accepts the initial state as the only argument and returns the current state and the function that updates the count state

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me </button>
    </div>
  );
}

export default Counter;
