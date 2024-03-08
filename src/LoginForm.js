import React, { useState } from 'react'

export default function LoginForm() {
     const [student, setStudent] = useState({name:"John",password:"pass1234"});
    let check =()=>{
        if(t1.value==student.name && t2.value==student.password){
            alert("Access granted");
        }
        else {
            alert("Access denied");
        }
    }
  return (
    <div>
        <h2>Login Form</h2><br></br>
        <input type='text' placeholder='Username' id="t1"></input><br></br><br></br>
        <input type='password' placeholder='Password' id="t2"></input><br></br><br></br>
        <button onClick={check}>SUBMIT</button><br></br>
    </div>
  )
  
}
