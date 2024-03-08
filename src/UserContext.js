import React from 'react'
import { useState,createContext,useContext } from 'react'
import UserContext2 from "./UserContext2"

export default function UserContext() {
    const [user ,setUser] = useState("Surendra");
    const [email ,setEmail]=useState("Surendra@lyrostech.com");
  return (
    <div>
        <UserContext.Provider value={{user, email}}>
            <h2>Hello {user} from us 1</h2>
            <UserContext2 />
        </UserContext.Provider>
    </div>
  )
}
