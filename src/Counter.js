import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function addNumber() {
    if (count > 0) {
      props.addNumber(count);
      setCount(0);
    }
  }

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button className="btn btn-increment" onClick={increase}>
          +
        </button>
        <button className="btn btn-decrement" onClick={decrease}>
          -
        </button>
        <button
          className="btn btn-add"
          onClick={addNumber}
          disabled={count === 0}
        >
          Add to List
        </button>
      </div>
    </div>
  );
}

export default Counter;