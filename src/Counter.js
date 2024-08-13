import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>Counter</h1>
        <h1 className="text-center mb-3"> {count}</h1>
        <div className="text-center">
          <button
            className="btn btn-primary mx-2"
            onClick={() => increment()}
            style={{ borderRadius: "50%", width: "50px", height: "50px" }}
          >
            +
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => decrement()}
            style={{ borderRadius: "50%", width: "50px", height: "50px" }}
          >
            -
          </button>
          <button
            className="btn btn-warning mx-2"
            onClick={() => reset()}
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
