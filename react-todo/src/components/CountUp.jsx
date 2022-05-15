import React, { useState } from "react";

export const CountUp = () => {
  const [count, setcount ] = useState(0);
  const onClickCountUp = () => setcount(count + 1);
  const onClickCountDown = () => setcount(count - 1);
  const onClickCountReset = () => setcount(0);
  return(
    <>
      <div>
        <p>{count}</p>
        <button onClick={onClickCountUp}>up</button>
        <button onClick={onClickCountDown}>down</button>
        <button onClick={onClickCountReset}>rest</button>
      </div>
    </>
  )
};