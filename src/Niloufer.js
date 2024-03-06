import React from 'react'
import './Niloufer.css'
import './ChaiCup.jpg'

export default function Niloufer(props) {
    const items=[
        {id:1,Name : "Chai" ,Image:'./ChaiCup.jpg',price:100},
        {id:2,Name : "Muska Bun" ,Image:"MuskaBun.jpg",price:100},
        {id:3,Name :"biscuits" ,Image:"biscuits.jpg",price:100}
    ]
  return (
    <>
    <div>Niloufer</div>
    <div className='container'>
   { items.map((element)=> {
        <div>
        <div>{element.Name}</div>
        <div><img src='{element.Image}'></img></div>
        <div>{element.price}</div>
      </div>
    })}
    </div> 
    </>
  )
}
