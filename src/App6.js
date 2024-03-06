import React from 'react'

export default function App6() {
   const display = (msg) =>{
    alert(msg);
   }
  return (
    <div>
        <button onClick={()=>display('Hi Surendra')}>click me</button>
    </div>
  )
}
// const display=()=>{
//     alert("Hello Surendra");
// }
// <button onClick={display}>Click me </button>