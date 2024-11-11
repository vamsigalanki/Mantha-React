import React from "react"
function About (Props){
    const [count,setCount]=React.useState(111)
    Props.getData(count)
    return (<div>child</div>)
    


}
export default About