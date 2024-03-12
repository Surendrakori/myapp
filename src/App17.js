import React, { createContext, useState } from 'react'
import { UserContext } from './App13a';
import LogInComp from './LogInComp';
import HomeComp from './HomeComp';
export const UserContext = createContext();

export default function App17() {
    const [user,setUser]=useState("Sardhar");
    const [flag,setFlag] = useState(0);
  return (
    <>
    <UserContext.Provider value={{user,setUser,setFlag,flag}}>
        {!flag?<LogInComp/>:flag==1?<HomeComp/>:flag==2?<RegisterComp/>:<LogInComp/>}
    </UserContext.Provider>
    </>
  )
}
