import React from 'react'
import './Niloufer1.css'
import './ChaiCup.jpg'

export default function App6() {
    return (
      <div>
        <h1>Niloufer</h1>
      <div className='container'>
          <div>
              <img src='ChaiCup.jpg'></img>
              <br></br>
              <h3>Chai</h3>
              <h3>price : 100</h3>
              <button>Add</button>
              
          </div>
          <div >
              <img src='biscuits.jpg'></img>
              <br></br>
              <h3>Stawberry</h3>
              <h3>price : 10</h3>
              <button>Add</button>
             
          </div>
          <div>
              <img src='MuskaBun.jpg'></img>
              <br></br>
              <h3>Orange</h3>
              <h3>price : 80</h3>
              <button>Add</button>
          </div>
  
      </div>
     
      </div>
    )
  }