import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
  const params = useParams()
  return (
    <div>I am user {params.username}</div>
  )
}
