//  import the useState Hook from React:
import React, { useState } from 'react';

function Counter() {
  // declare count variable and set it to 0
  let [count, setCount] = useState(0); // useState accepts the initial state as the only argument and returns the current state and the function that updates the count state

  // Lines 9 - 11 perform the equivalent of line 6 (which uses array destructuring syntax)
  // let countVariable = useState(0); // Returns a pair
  // let count = countVariable[0]; // First item in a pair
  // let setCount = countVariable[1]; // Second item in a pair

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
