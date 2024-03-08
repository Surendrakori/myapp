import React from 'react'
import { useState } from 'react';

const complexFUnction = () =>{
    console.log("Initializing count");
    return 5;
}
export default function bestPractise() {
    const [count , setCount] = useState(() => {
        return complexFUnction() // runs once
    })
  return (
    <div>
        <button onClick={()=> setCount((prevstate) => prevState -1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
    </div>
  )
}
