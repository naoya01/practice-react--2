import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [count, setCount] = useState(0);
  const onClickCountUp = () =>{
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </div>
  );
};
