import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Userid}= useParams()
  return (
    <div className=' text-center text-white bg-amber-600  '> User: {Userid} </div>
  )
}

export default User