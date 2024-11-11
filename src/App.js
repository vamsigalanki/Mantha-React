import About from './about';
import './App.css';

function App() {
  var  count=(ghj)=>{
    console.log(ghj)
    alert("count"+ ghj)
  }
  return (
    <div className="App">
      <About getData={count}></About>
        
    </div>
  );
}

export default App;
