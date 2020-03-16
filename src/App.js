import React, {useState} from 'react';
import './App.css';


function App() {

  const [counter, setCounter] = useState(5);
  return (
    <button onClick={() => setCounter(counter*2)}>{counter}</button>
  );
}

export default App;
