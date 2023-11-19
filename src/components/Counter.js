import React, { useState } from "react";

function Counter() {
  const [currentCount, setCount] = useState(0);

  function increment() {
    //console.log(`before setState: ${count}`);

   // setCount(count + 1);
   setCount((currentCount) => currentCount + 1);

    //console.log(count);
    console.log(currentCount);

   //setCount(count +1);
   setCount((currentCount) => currentCount + 1);
console.log(currentCount);
   //console.log(count);
 
   //console.log(`after setState: ${count}`);

  }

  return <div onClick={increment}>I have been clicked {currentCount} times</div>;
}


export default Counter;
