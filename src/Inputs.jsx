import React from "react"
class Inputs extends React.Component{
    submit=()=>{
        alert("hiiii")
        return (
            console.log("hellow")
        )
    }
    render () {
        return (
            <div> 
                <input type="text" placeholder=" Enter ur username"></input>
                <input type="text" placeholder="Enter ur password"></input>
                <input type="text" placeholder="Enter ur email"></input>
                <button onClick={this.submit}> submit</button>
            </div>
        )
    }
}
export default Inputs