import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    setNumber(number+1);
  }

  const decreaseNumber = () => {
    setNumber(number-1);
  }

  return (
    <>
      <div>
        <h2>A React counter (Inline Function)</h2>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>

      <div>
        <h2>A React counter (Anonymous Function)</h2>
        <button onClick={decreaseNumber}>-</button>
        <h3>{number}</h3>
        <button onClick={addNumber}>+</button>
      </div>
    </>
  );
}

export default App;
