import React from 'react'
import { useState } from 'react';

export default function withObjects() {
    const [student, setStudent] = useState({name : "Surendra",age :24});
    // console.log(Date());
  return (
    <div>
        <p>
            <input 
            type="text"
            onChange={(e) =>
            setStudent((prevState)=>({
                ...prevState,
                ...{name :e.target.value},
            }))
            }
            placeholder='Enter Name'
            ></input>
        </p>
        <p>
        <input 
        type="text"
        onChange = {(e) =>
        setStudent((prevState) => ({
            ...prevState,
            ...{ age : e.target.value},
        }))
        }
        placeholder='Enter age '
        ></input>
        </p>
        <span>
            {student.name}-{student.age}
        </span>
    </div>
  )
}
