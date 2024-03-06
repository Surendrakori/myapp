import React from 'react'

export default function App7(props) {
  return (
    <div style={{color:'red'}}>
        Hello {props.name} .you are {props.age}
    </div>
  )
}
App7.defaultProps = {name:"Arjun", age:24}