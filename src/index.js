import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import CounterHook from './CounterHook';

ReactDOM.render(
  <>
    <Counter />
    <CounterHook />
  </>,
  document.getElementById('root')
);
