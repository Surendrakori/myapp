import React from 'react'
import Login from './Login'
import Home from './Home'

export default function App2(props) {
    return props.user ==="" && (
        <div>
     <input type='text' placeholder='Name'></input><br></br>
    <input type='password' placeholder='Password'></input><br></br>
    <input type='button' value='Login'></input><br></br>
 </div>
    )



//     return (props.user===""? <div>
//     <input type='text' placeholder='Name'></input><br></br>
//    <input type='password' placeholder='Password'></input><br></br>
//    <input type='button' value='Login'></input><br></br>
// </div>: <div>Hello {props.user}</div>)
   
//   return (props.user===""? <Login />: <Home userName={props.user}/>)
   
    // if(props.user===""){
    //     return  <Login />
    // }
    // else {
    //     return <Home userName={props.user} />
    // }

}
