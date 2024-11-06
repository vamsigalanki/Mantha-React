import React from 'react';
import './App.css';
import Count from './Count';

function App() {
  const [count, setCount]=React.useState(1000)
  return (
    <div className="App">
     <Count name={count}></Count>
    </div>
  );
}

export default App;
