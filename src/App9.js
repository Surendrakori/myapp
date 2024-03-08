import React from 'react'
import { useState } from 'react'

export default function App9() {
    const [student , setStudent] = useState({});
    const [students, setStudents]= useState([]);
    const addStudent = () =>{
        student.id= Date.now();
        setStudents((prevStudents) => [...prevStudents, student]);
    };
    const deleteStudent = (name)=>{
        setStudents(students.filter((e) => e.name !==name));
    };
    const editStudent = (value) =>{
        setStudent(value);
        deleteStudent(value.name);
    }
  return (
    <div>
        <p>
            <input 
            type="text"
            value ={student.name}
            onChange={(e) => 
            setStudent((prevStudent) => ({
                ...prevStudent,
                ...{ name : e.target.value},
            }))
        }
        placeholder='Enter name'
        ></input>
        </p>
        <p>
            <input 
            type="text"
            value={student.age}
            onChange={(e) =>
            setStudent((prevStudent) => ({
                ...prevStudent,
                ...{age : e.target.value},
            }))
            }
            placeholder='Enter age'
            ></input>
        </p>
        <p>
            <button onClick={addStudent}>Add student</button>
        </p>
        <div>
            {students &&
            students.map((value, index) => (
                <div key={index}>
                    {value.name}-{value.age}-{" "}
                    <button onClick={() => deleteStudent(value.name)}>delete</button>
                    <button onClick={() => editStudent(value)}>Edit</button>
                </div>
            )
           ) }
        </div>
    </div>
  )
}
