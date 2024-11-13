import React from 'react';
import './App.css';
import Lifecycle from './Lifecycle';

function App() {
  var [count,setCount]=React.useState(356)
  return (
    <div className="App">
      <Lifecycle></Lifecycle>
    </div>
  );
}

export default App;
