import { useState } from "react";
import "./App.css";

function MakeCounter() {
  let [counter, setCounter] = useState(0);

  function increaseHandler() {
    setCounter(++counter)
    console.log('Increase')
  }

  function decreaseHandler() {
    setCounter(--counter)
    if (counter < 0) {
      setCounter(10)
    }
    console.log('Decrease')
  }


  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  );
}

export default MakeCounter;
