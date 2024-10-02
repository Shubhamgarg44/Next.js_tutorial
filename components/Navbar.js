import React from 'react'
import Link  from 'next/link'

const Navbar = () => {
  return (
    <div>
      
       <Link href="/about">
        about
      </Link> 
        
      <Link href="/contact">
        contact
      </Link>
  
    </div>
  )
}

export default Navbar
