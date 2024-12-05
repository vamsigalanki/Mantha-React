import React, { Fragment, useState } from "react";
function Forms(){
    const [data,setData]=useState([]);
    const [state,setState]=React.useState({
        name:'',
        number:"",
        email:"",
        password:""
    });
    const [edit,setEdit]=React.useState(null)
    function change(event){
        const {name,value}=event.target;
        setState((pre)=>({
            ...pre,[name]:value
        }))

    }
    function submit(event){
        event.preventDefault();
        if(edit!=null){
          const update=[...data];
          update[edit]=state;
          console.log(edit)  ;
          setData(update);
          setEdit(null);                                                                                                                                                                                  
        }
        else{
            setData((pre)=>[...pre,state]);
        }
        setState({ name: "", number: "", email: "", password: "" });
    }
    function Edit(index){
       
        setState(data[index])
        setEdit(index)
    }
        return(
        <Fragment>
            <form onSubmit={submit}>
                <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="Enter User Name" name="name" onChange={change} value={state.name}></input>
                <br></br>
                <label>Number:</label>
                <input type="text" placeholder="Enter user Mobile Number" name="number" onChange={change} value={state.number}></input>
                <br></br>
                <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="email" placeholder="Enter User Email"  name="email" onChange={change} value={state.email}></input>
                <br></br>
                <label>Password:</label>
                <input type="password" placeholder="Enter user password" name="password" onChange={change} value={state.password}></input>
                <br></br>
                &nbsp;
                <input type="submit"></input>
            </form>
            <>
            {
                data.map((res,i)=>{
                    return(<div key={i}><p key={i}>{res.name}</p>
                        <p>{res.number}</p>
                        <p>{res.email}</p>
                        <p>{res.password}</p>
                        <button onClick={()=>{Edit(i)}}>EDIT</button>
                    </div>
                    )
                })
            }</>
        </Fragment>
    )
}
 export default Forms;