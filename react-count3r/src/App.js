import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h2>A React counter (Inline Function)</h2>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
