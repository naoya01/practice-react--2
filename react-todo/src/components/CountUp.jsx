import React, { useState } from "react";

export const CountUp = () => {
  const [count, setcount ] = useState(0);
  const onClickCount = () => setcount(count + 1);
  return(
    <>
      <div>
        <p>{count}</p>
        <button onClick={onClickCount}>up</button>
        <button>down</button>
      </div>
    </>
  )
};