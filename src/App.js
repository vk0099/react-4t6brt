import React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Display count={count} />
      <Controls count={count} setCount={setCount} />
    </div>
  );
}

function Display({ count }) {
  return <div>You clicked {count} times</div>;
}

function Controls({ count, setCount }) {
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </>
  );
}
