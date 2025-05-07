import React, { useContext } from 'react'
import {UserContext} from '../App'
const ChildC = () => {
  const user = useContext(UserContext)
  return (
    <div>Name : {user.name}</div>
  )
}

export default ChildC