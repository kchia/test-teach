// your solution here
import React, { useState } from 'react';

function TimerHook() {
  let [count, setCount] = useState(10);

  function handleClick() {
    setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
  }

  if (count <= 0) {
    return <div>You are out of time!</div>;
  } else {
    return (
      <div>
        <p>Counting down: {count}</p>
        <button onClick={handleClick}>Start Count</button>
      </div>
    );
  }
}

export default TimerHook;
