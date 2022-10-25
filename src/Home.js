import React, { useContext } from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'

const Home = () => {
  const [open, setOpen] = useState(false)
  return (<div> 
    <h2>home component</h2>
    {!open &&  <i onClick={()=>setOpen(!open)} > <FaBars/>  </i>}
   

   {open && <Sidebar open={open} setOpen={setOpen}/>}
  </div>
  )
}

export default Home
