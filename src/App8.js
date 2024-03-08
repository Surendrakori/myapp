import React from 'react'
import { useState } from 'react'

export default function App8() {
    const [student , setStudent] = useState({});
    const [students, setStudents]= useState([]);
    const addStudent = () =>{
        setStudents((prevStudents) => [...prevStudents, student]);
    };
  return (
    <div>
        <p>
            <input 
            type="text" 
            onChange={(e) =>
            setStudent((prevStudent) => ({
                ...prevStudent,
                ...{name: e.target.value},
            }))
        }
        placeholder='Enter name'
        ></input></p>
        <p>
            <input
            type="text"
            onChange={(e) =>
            setStudent((prevStudent) => ({
                ...prevStudent,
                ...{age: e.target.value},
            }))
            }
            placeholder='Enter age'
            ></input>
        </p>
        <p>
            <button onClick={addStudent}>Add Student</button>
        </p>
        <div>
            {
                students &&
                students.map((value,index) => {
                    <div key={index}>
                        {value.name}-{value.age}
                        </div>
                })
            }
        </div>
    </div>
  )
}
