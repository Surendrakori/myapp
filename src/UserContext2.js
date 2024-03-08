import React from 'react'
import {UserContext} from "./UserContext"
import {useContext} from "react"

export default function UserContext2() {
    const {user, email}= useContext(UserContext);
  return (
    <div>
        <h2>Hello {user} from uc 2 </h2>
    </div>
  )
}
