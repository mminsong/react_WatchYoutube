import React, { useState } from "react";

const Counter = () => {
  //const num=0; num이라는 변수에 대한 setter함수
  const [num, setNumber] = useState(0);

  const increase = () => {
    setNumber(num + 1);
  };
  const decrease = () => {
    setNumber(num - 1);
  };

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  );
};
export default Counter;
