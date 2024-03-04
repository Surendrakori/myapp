import React from 'react'

export default function App5() {
    let names=["Surendra","Uday","Gowtham"]
  return (
    <ul>
        {names.map((e,i) => (
            <li key={i}>{e}</li>
       ) )}
    </ul>
  )
}
