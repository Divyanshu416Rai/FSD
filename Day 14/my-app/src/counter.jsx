import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={decrease} style={{ marginRight: "10px" }}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
