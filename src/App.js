
import './App.css';
import './Acomponent.jsx' ;
import Acomponent from './Acomponent.jsx';
import './Inputs.jsx';
import Inputs from './Inputs.jsx';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <Acomponent></Acomponent>
      {/* <Inputs></Inputs> */}
      <Home></Home>
    </div>
  );
}

export default App;
