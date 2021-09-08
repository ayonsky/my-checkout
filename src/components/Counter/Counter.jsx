import React, { useEffect, useState } from "react";
import { CounterButton, CounterInput } from "./Counter.style";

function Counter(props) {
  const { actual = 1, max, onChange } = props;
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (onChange && actual !== counter) onChange(counter);
  }, [counter]);

  useEffect(() => {
    setCounter(actual);
  }, [actual]);

  return (
    <div>
      <CounterButton
        action={"decrement"}
        max={max}
        counter={counter}
        onClick={(e) => {
          e.stopPropagation();
          setCounter((prevCounter) => prevCounter - 1);
        }}
        disabled={counter === 0}
      >
        -
      </CounterButton>
      <CounterInput
        type={"text"}
        value={counter}
        onChange={() => {}}
        style={{ width: "20px" }}
      />
      <CounterButton
        action={"increment"}
        max={max}
        counter={counter}
        onClick={(e) => {
          e.stopPropagation();
          setCounter((prevCounter) => prevCounter + 1);
        }}
        disabled={max === 0}
      >
        +
      </CounterButton>
    </div>
  );
}

export default Counter;
