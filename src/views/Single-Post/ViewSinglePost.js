import React from 'react'
import { useLocation } from 'react-router'

const ViewSinglePost = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <div>
      Single Post 
    </div>
  )
}

export default ViewSinglePost
