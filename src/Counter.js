import React from "react";
function Counter(){
    const [count,setCount]=React.useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1)
    }
    return(<>
    <h1>count:{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>)
}
export default Counter;