import React from 'react'
import { useState , useEffect } from 'react'

// export default function StateComponent() {
//     const [count , setCount]=useState(10);
//     console.log("Component loaded");
//   return (
//     <div>
//         <button onClick={()=>setCount((prevState) => prevState+1)}>
//             click
//         </button>
//         <span>{count}</span>
//     </div>
//   )
// }
// export default function StateComponent() {
//     const [runs , setRuns]=useState(0);
//     const [wickets, setWickets] = useState(0);
//     console.log("Component loaded");
//     useEffect(()=>{
//         console.log("Better luck next time");},[wickets]
//     )
//   return (
//     <div>
//         <button onClick={()=>setRuns((prevState) => prevState+1)}>
//             Runs({runs})
//         </button>
//         <button onClick={()=>setWickets((prevState) => prevState +1)}>wickets({wickets})</button>
        
//     </div>
//   )
// }
export default function StateComponent() {
  const [runs , setRuns]=useState(0);
  const [wickets, setWickets] = useState(0);
  // console.log("Component loaded");
  useEffect(()=>{
    if(wickets>0){
      console.log(`Wicket :${wickets} Better luck next time`);
    } 
},[wickets])
  useEffect(()=>{
    if(runs>0){
      console.log(`Congrats ! score : ${runs} `)
    }
  },[runs])
return (
  <div>
      <button onClick={()=>setRuns((prevState) => prevState+1)}>
          Runs({runs})
      </button>
      <button onClick={()=>setWickets((prevState) => prevState +1)}>wickets({wickets})</button>
      
  </div>
)
}

