import React, { useContext } from 'react'
import {FirstName,LastName} from './context'
function ComB() {
    const fname:string = useContext(FirstName)
    const lname:string = useContext(LastName)
  return (
    <>
        <h1>my name is {fname} {lname}</h1>
    </>
  )
}

export default ComB