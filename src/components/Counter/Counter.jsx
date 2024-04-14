"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="border border-purple-500 mt-5 p-5 flex justify-center items-center">
      <button
        className="btn btn-accent"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      {counter}
      <button
        className="btn btn-accent"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
