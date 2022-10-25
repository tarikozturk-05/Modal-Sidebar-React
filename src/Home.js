import React, { useContext } from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'

const Home = () => {
  const [open, setOpen] = useState(true)
  return (<div> 
    <h2>home component</h2>
    <i onClick={()=>setOpen(!open)} ><FaBars/> </i>

   {open && <Sidebar/>}
  </div>
  )
}

export default Home
