"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from '@/components/Navbar'

const page = () => {
  const [count, setcount] = useState(0)
  return (
    <div> 
      <Navbar/>
      i am home page {count}
      <button onClick={()=> setcount(count + 1)}> click me</button>
    </div>
  )
}

export default page
