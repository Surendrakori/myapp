import React from 'react'
import './Niloufer.css'

export default function Niloufer(props) {
    const items=[
        {id:1,Name : "Chai" ,Image:"ChaiCup.jpg",price:100},
        {id:2,Name : "Muska Bun" ,Image:"MuskaBun.jpg",price:100},
        {id:3,Name :"biscuits" ,Image:"biscuits.jpg",price:100}
    ]
  return (
    <>
    <div>Niloufer</div>
    <div className='container'>
   { items.forEach((element)=> {
        <div className='item'>
        <div>{element.Name}</div>
        <div><img src='{Image}'></img></div>
    </div>
    })}
    </div> 
    </>
  )
}
