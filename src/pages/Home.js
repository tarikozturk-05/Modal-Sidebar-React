import React, { useContext } from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Home = () => {
  const yolGosterici= useNavigate()
  const [open, setOpen] = useState(false)
  return (<div> 
    
    {!open &&  <i onClick={()=>setOpen(!open)} > <FaBars/>  </i>}
   

   {open && <Sidebar open={open} setOpen={setOpen}/>}
   <button onClick={()=>yolGosterici("modal") } >Open Modal</button>
   <Outlet/>
  </div>
  )
}

export default Home
